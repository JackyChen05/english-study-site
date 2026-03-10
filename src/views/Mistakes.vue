<template>
  <div class="space-y-6 animate-fade-in">
    <h1 class="text-3xl font-bold text-center rainbow-text">错题本</h1>

    <!-- 统计 -->
    <div class="grid grid-cols-3 gap-4">
      <div class="card text-center p-4 bg-gradient-to-br from-red-50 to-pink-50">
        <div class="text-2xl font-bold text-red-500">{{ mistakesStore.stats.total }}</div>
        <div class="text-sm text-gray-500">总错题数</div>
      </div>
      <div class="card text-center p-4 bg-gradient-to-br from-green-50 to-teal-50">
        <div class="text-2xl font-bold text-green-500">{{ mistakesStore.stats.mastered }}</div>
        <div class="text-sm text-gray-500">已掌握</div>
      </div>
      <div class="card text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div class="text-2xl font-bold text-yellow-500">{{ mistakesStore.stats.unmastered }}</div>
        <div class="text-sm text-gray-500">待复习</div>
      </div>
    </div>

    <!-- 分类标签 -->
    <div class="flex justify-center gap-2">
      <button v-for="tab in tabs" :key="tab.value" @click="currentTab = tab.value"
        :class="['px-4 py-2 rounded-xl text-sm font-medium transition-all', currentTab === tab.value ? 'bg-gradient-to-r from-rainbow-blue to-rainbow-purple text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200']"
      >
        {{ tab.label }} ({{ getCount(tab.value) }})
      </button>
    </div>

    <!-- 错题列表 -->
    <div v-if="filteredMistakes.length" class="space-y-4">
      <div v-for="mistake in filteredMistakes" :key="mistake.id" class="card"
        :class="mistake.mastered ? 'opacity-50' : ''"
      >
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs px-2 py-1 rounded-full" :class="getTypeClass(mistake.type)">
                {{ getTypeLabel(mistake.type) }}
              </span>
              <span class="text-xs text-gray-400">错误 {{ mistake.wrongCount }} 次</span>
            </div>
            <div class="font-medium text-gray-800">{{ mistake.question }}</div>
            <div class="text-gray-500 text-sm mt-1">正确答案：{{ mistake.answer }}</div>
            <div v-if="mistake.userAnswer" class="text-red-500 text-sm">你的答案：{{ mistake.userAnswer }}</div>
          </div>
          <button v-if="!mistake.mastered" @click="markMastered(mistake)" class="btn btn-secondary text-sm">
            标记掌握
          </button>
          <button v-else @click="unmarkMastered(mistake)" class="btn bg-gray-100 text-gray-500 text-sm">
            取消标记
          </button>
        </div>
      </div>
    </div>

    <div v-else class="card text-center py-12 text-gray-500">
      <div class="text-6xl mb-4">🎉</div>
      <p>太棒了！没有{{ currentTab === 'unmastered' ? '待复习的' : '' }}错题</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMistakesStore } from '../stores/mistakes'

const mistakesStore = useMistakesStore()

const currentTab = ref('unmastered')
const tabs = [
  { value: 'unmastered', label: '待复习' },
  { value: 'all', label: '全部' },
  { value: 'mastered', label: '已掌握' }
]

const filteredMistakes = computed(() => {
  if (currentTab.value === 'all') return mistakesStore.allMistakes
  if (currentTab.value === 'mastered') return mistakesStore.allMistakes.filter(m => m.mastered)
  return mistakesStore.unmasteredMistakes
})

const getCount = (tab) => {
  if (tab === 'all') return mistakesStore.stats.total
  if (tab === 'mastered') return mistakesStore.stats.mastered
  return mistakesStore.stats.unmastered
}

const getTypeClass = (type) => ({
  'vocabulary': 'bg-blue-100 text-blue-700',
  'grammar': 'bg-purple-100 text-purple-700',
  'sentence': 'bg-green-100 text-green-700'
}[type] || 'bg-gray-100')

const getTypeLabel = (type) => ({
  'vocabulary': '单词',
  'grammar': '语法',
  'sentence': '句型'
}[type] || type)

const markMastered = (mistake) => {
  mistakesStore.markMastered(mistake.type, mistake.id)
}

const unmarkMastered = (mistake) => {
  mistakesStore.unmarkMastered(mistake.type, mistake.id)
}
</script>
