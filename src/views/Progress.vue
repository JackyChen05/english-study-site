<template>
  <div class="space-y-8 animate-fade-in">
    <h1 class="text-3xl font-bold text-center rainbow-text">学习进度</h1>

    <!-- 概览卡片 -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="card text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div class="text-4xl mb-2">🔥</div>
        <div class="text-3xl font-bold text-orange-500">{{ progressStore.streakDays }}</div>
        <div class="text-sm text-gray-500">连续学习天数</div>
      </div>
      <div class="card text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div class="text-4xl mb-2">📊</div>
        <div class="text-3xl font-bold text-blue-500">{{ progressStore.overallProgress }}%</div>
        <div class="text-sm text-gray-500">总体进度</div>
      </div>
      <div class="card text-center p-6 bg-gradient-to-br from-green-50 to-teal-50">
        <div class="text-4xl mb-2">🌟</div>
        <div class="text-3xl font-bold text-green-500">{{ progressStore.masteredWords.length }}</div>
        <div class="text-sm text-gray-500">已掌握单词</div>
      </div>
      <div class="card text-center p-6 bg-gradient-to-br from-pink-50 to-red-50">
        <div class="text-4xl mb-2">📝</div>
        <div class="text-3xl font-bold text-pink-500">{{ mistakesStore.stats.unmastered }}</div>
        <div class="text-sm text-gray-500">待复习错题</div>
      </div>
    </div>

    <!-- Module进度 -->
    <section class="card">
      <h2 class="text-xl font-bold text-gray-800 mb-6">模块进度</h2>
      <div class="space-y-4">
        <div v-for="module in textbook.modules" :key="module.id" class="flex items-center gap-4">
          <div class="w-20 font-medium text-gray-700">{{ module.title }}</div>
          <div class="flex-1">
            <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full rounded-full transition-all duration-500"
                :style="{ width: getModuleProgress(module.id) + '%', backgroundColor: module.color }"
              ></div>
            </div>
          </div>
          <div class="w-16 text-right font-medium" :style="{ color: module.color }">
            {{ getModuleProgress(module.id) }}%
          </div>
        </div>
      </div>
    </section>

    <!-- 最近测验 -->
    <section v-if="progressStore.quizHistory.length" class="card">
      <h2 class="text-xl font-bold text-gray-800 mb-6">最近测验</h2>
      <div class="space-y-2">
        <div v-for="(quiz, index) in recentQuizzes" :key="index" class="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
          <div>
            <div class="font-medium text-gray-800">{{ getUnitTitle(quiz.unitId) }}</div>
            <div class="text-sm text-gray-500">{{ formatDate(quiz.date) }}</div>
          </div>
          <div class="text-2xl font-bold" :class="quiz.score >= 80 ? 'text-green-500' : quiz.score >= 60 ? 'text-blue-500' : 'text-orange-500'">
            {{ quiz.score }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProgressStore } from '../stores/progress'
import { useMistakesStore } from '../stores/mistakes'
import { textbook, units } from '../data/textbook'

const progressStore = useProgressStore()
const mistakesStore = useMistakesStore()

const getModuleProgress = (moduleId) => {
  const progress = progressStore.getModuleProgress(moduleId)
  return progress.progress
}

const recentQuizzes = computed(() => {
  return [...progressStore.quizHistory].reverse().slice(0, 5)
})

const getUnitTitle = (unitId) => {
  return units[unitId]?.titleZh || unitId
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('zh-CN')
}
</script>
