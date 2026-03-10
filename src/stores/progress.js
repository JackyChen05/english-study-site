import { defineStore } from 'pinia'
import { storage } from '../utils/storage'

export const useProgressStore = defineStore('progress', {
  state: () => ({
    lastStudyDate: null,
    streakDays: 0,
    totalStudyTime: 0, // 秒
    moduleProgress: {},
    unitProgress: {},
    masteredWords: [],
    quizHistory: []
  }),

  getters: {
    // 获取总学习天数
    totalStudyDays: (state) => {
      return Object.keys(state.unitProgress).length
    },

    // 获取总体进度百分比
    overallProgress: (state) => {
      const units = Object.values(state.unitProgress)
      if (units.length === 0) return 0
      const totalProgress = units.reduce((sum, u) => sum + (u.progress || 0), 0)
      return Math.round(totalProgress / units.length)
    },

    // 获取Module进度
    getModuleProgress: (state) => (moduleId) => {
      return state.moduleProgress[moduleId] || { completed: 0, total: 3, progress: 0 }
    },

    // 获取Unit进度
    getUnitProgress: (state) => (unitId) => {
      return state.unitProgress[unitId] || {
        vocabulary: { learned: 0, total: 0 },
        lesson: { currentPage: 0, totalPages: 0, completed: false },
        quiz: { bestScore: 0, attempts: 0 }
      }
    },

    // 检查是否已学习今天
    hasStudiedToday: (state) => {
      if (!state.lastStudyDate) return false
      const today = new Date().toDateString()
      return state.lastStudyDate === today
    }
  },

  actions: {
    // 从localStorage加载数据
    loadFromStorage() {
      const data = storage.get('progress', null)
      if (data) {
        this.$patch(data)
      }
    },

    // 保存到localStorage
    saveToStorage() {
      storage.set('progress', this.$state)
    },

    // 更新学习日期和连续天数
    updateStudyDate() {
      const today = new Date().toDateString()
      const last = this.lastStudyDate

      if (last) {
        const diff = (new Date(today) - new Date(last)) / (1000 * 60 * 60 * 24)
        if (diff === 1) {
          this.streakDays++
        } else if (diff > 1) {
          this.streakDays = 1
        }
      } else {
        this.streakDays = 1
      }

      this.lastStudyDate = today
      this.saveToStorage()
    },

    // 更新Unit进度
    updateUnitProgress(unitId, data) {
      this.unitProgress[unitId] = {
        ...this.unitProgress[unitId],
        ...data
      }
      this.calculateModuleProgress()
      this.saveToStorage()
    },

    // 更新词汇学习进度
    updateVocabularyProgress(unitId, learned, total) {
      if (!this.unitProgress[unitId]) {
        this.unitProgress[unitId] = {}
      }
      this.unitProgress[unitId].vocabulary = { learned, total }
      this.saveToStorage()
    },

    // 更新课文学习进度
    updateLessonProgress(unitId, currentPage, totalPages, completed = false) {
      if (!this.unitProgress[unitId]) {
        this.unitProgress[unitId] = {}
      }
      this.unitProgress[unitId].lesson = { currentPage, totalPages, completed }
      this.saveToStorage()
    },

    // 更新测验成绩
    updateQuizProgress(unitId, score) {
      if (!this.unitProgress[unitId]) {
        this.unitProgress[unitId] = {}
      }
      const current = this.unitProgress[unitId].quiz || { bestScore: 0, attempts: 0 }
      this.unitProgress[unitId].quiz = {
        bestScore: Math.max(current.bestScore, score),
        attempts: current.attempts + 1
      }

      // 添加到历史记录
      this.quizHistory.push({
        unitId,
        date: new Date().toISOString(),
        score
      })

      this.saveToStorage()
    },

    // 计算Module进度
    calculateModuleProgress() {
      const moduleUnits = {
        m1: ['u1', 'u2', 'u3'],
        m2: ['u4', 'u5', 'u6'],
        m3: ['u7', 'u8', 'u9'],
        m4: ['u10', 'u11', 'u12']
      }

      for (const [moduleId, units] of Object.entries(moduleUnits)) {
        let completed = 0
        let totalProgress = 0

        units.forEach(unitId => {
          const progress = this.unitProgress[unitId]?.progress || 0
          totalProgress += progress
          if (progress >= 100) completed++
        })

        this.moduleProgress[moduleId] = {
          completed,
          total: units.length,
          progress: Math.round(totalProgress / units.length)
        }
      }
    },

    // 添加已掌握单词
    addMasteredWord(word) {
      if (!this.masteredWords.includes(word)) {
        this.masteredWords.push(word)
        this.saveToStorage()
      }
    },

    // 移除已掌握单词
    removeMasteredWord(word) {
      this.masteredWords = this.masteredWords.filter(w => w !== word)
      this.saveToStorage()
    },

    // 增加学习时长
    addStudyTime(seconds) {
      this.totalStudyTime += seconds
      this.saveToStorage()
    },

    // 重置所有进度
    resetAll() {
      this.$reset()
      storage.remove('progress')
    }
  }
})
