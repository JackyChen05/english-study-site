import { defineStore } from 'pinia'
import { storage } from '../utils/storage'

export const useMistakesStore = defineStore('mistakes', {
  state: () => ({
    mistakes: {
      vocabulary: [],
      grammar: [],
      sentence: []
    }
  }),

  getters: {
    // 获取所有错题
    allMistakes: (state) => {
      return [
        ...state.mistakes.vocabulary.map(m => ({ ...m, type: 'vocabulary' })),
        ...state.mistakes.grammar.map(m => ({ ...m, type: 'grammar' })),
        ...state.mistakes.sentence.map(m => ({ ...m, type: 'sentence' }))
      ].sort((a, b) => new Date(b.lastWrong) - new Date(a.lastWrong))
    },

    // 获取未掌握的错题
    unmasteredMistakes: (state) => {
      return [
        ...state.mistakes.vocabulary.filter(m => !m.mastered).map(m => ({ ...m, type: 'vocabulary' })),
        ...state.mistakes.grammar.filter(m => !m.mastered).map(m => ({ ...m, type: 'grammar' })),
        ...state.mistakes.sentence.filter(m => !m.mastered).map(m => ({ ...m, type: 'sentence' }))
      ]
    },

    // 获取今日需要复习的错题（基于艾宾浩斯遗忘曲线）
    todayReview: (state) => {
      const now = new Date()
      const reviewIntervals = [1, 2, 4, 7, 15, 30]

      const needsReview = []

      Object.values(state.mistakes).flat().forEach(mistake => {
        if (mistake.mastered) return

        const daysSince = Math.floor((now - new Date(mistake.lastWrong)) / (1000 * 60 * 60 * 24))

        // 如果在复习间隔上
        if (reviewIntervals.includes(daysSince)) {
          needsReview.push(mistake)
        }
      })

      return needsReview
    },

    // 获取统计
    stats: (state) => {
      const all = Object.values(state.mistakes).flat()
      return {
        total: all.length,
        mastered: all.filter(m => m.mastered).length,
        unmastered: all.filter(m => !m.mastered).length,
        byType: {
          vocabulary: state.mistakes.vocabulary.filter(m => !m.mastered).length,
          grammar: state.mistakes.grammar.filter(m => !m.mastered).length,
          sentence: state.mistakes.sentence.filter(m => !m.mastered).length
        }
      }
    }
  },

  actions: {
    // 从localStorage加载
    loadFromStorage() {
      const data = storage.get('mistakes', null)
      if (data) {
        this.$patch(data)
      }
    },

    // 保存到localStorage
    saveToStorage() {
      storage.set('mistakes', this.$state)
    },

    // 添加错题
    addMistake(type, question, userAnswer) {
      const existingIndex = this.mistakes[type].findIndex(m => m.id === question.id)

      if (existingIndex !== -1) {
        // 更新现有错题
        const existing = this.mistakes[type][existingIndex]
        existing.wrongCount++
        existing.lastWrong = new Date().toISOString()
        existing.userAnswers = [...(existing.userAnswers || []), userAnswer]
      } else {
        // 添加新错题
        this.mistakes[type].push({
          id: question.id,
          question: question.question,
          answer: question.answer,
          userAnswer: userAnswer,
          userAnswers: [userAnswer],
          unitId: question.unitId,
          wrongCount: 1,
          lastWrong: new Date().toISOString(),
          mastered: false,
          // 额外信息
          ...(type === 'vocabulary' && {
            word: question.word,
            phonetic: question.phonetic,
            meaning: question.options.find(o => o === question.answer)
          }),
          ...(type === 'grammar' && {
            fullSentence: question.fullSentence,
            translation: question.translation
          }),
          ...(type === 'sentence' && {
            scrambled: question.scrambled,
            translation: question.translation
          })
        })
      }

      this.saveToStorage()
    },

    // 标记为已掌握
    markMastered(type, id) {
      const mistake = this.mistakes[type].find(m => m.id === id)
      if (mistake) {
        mistake.mastered = true
        mistake.masteredAt = new Date().toISOString()
        this.saveToStorage()
      }
    },

    // 取消已掌握标记
    unmarkMastered(type, id) {
      const mistake = this.mistakes[type].find(m => m.id === id)
      if (mistake) {
        mistake.mastered = false
        delete mistake.masteredAt
        this.saveToStorage()
      }
    },

    // 删除错题
    removeMistake(type, id) {
      this.mistakes[type] = this.mistakes[type].filter(m => m.id !== id)
      this.saveToStorage()
    },

    // 获取复习建议
    getReviewSuggestion(mistake) {
      const intervals = [1, 2, 4, 7, 15, 30]
      const daysSince = Math.floor((new Date() - new Date(mistake.lastWrong)) / (1000 * 60 * 60 * 24))

      // 找到下一个复习间隔
      const nextInterval = intervals.find(i => i > daysSince)

      if (nextInterval) {
        return `${nextInterval - daysSince}天后需要再次复习`
      } else {
        return '建议定期复习巩固'
      }
    },

    // 批量添加测验错题
    addQuizMistakes(unitId, wrongQuestions) {
      wrongQuestions.forEach(q => {
        this.addMistake(q.type, { ...q, unitId }, q.userAnswer)
      })
    },

    // 重置所有错题
    resetAll() {
      this.$reset()
      storage.remove('mistakes')
    }
  }
})
