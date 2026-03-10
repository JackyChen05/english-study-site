<template>
  <div v-if="unit" class="space-y-6 animate-fade-in">
    <!-- 头部 -->
    <div class="flex items-center justify-between">
      <router-link :to="`/unit/${unit.id}`" class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        返回单元
      </router-link>
      <h1 class="text-2xl font-bold text-gray-800">课文学习</h1>
      <div class="flex gap-2">
        <button
          v-for="mode in displayModes"
          :key="mode.value"
          @click="displayMode = mode.value"
          :class="['px-3 py-1 rounded-lg text-sm', displayMode === mode.value ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-100']"
        >
          {{ mode.label }}
        </button>
      </div>
    </div>

    <!-- 课文内容 -->
    <div class="space-y-6">
      <div v-for="(lesson, lIndex) in unit.lessons" :key="lIndex" class="card">
        <h2 class="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">{{ lesson.title }}</h2>

        <!-- 对话类型 -->
        <div v-if="lesson.type === 'dialogue'" class="space-y-4">
          <div
            v-for="(line, index) in lesson.content"
            :key="index"
            class="flex gap-4 p-4 rounded-xl transition-colors"
            :class="getSpeakerColor(line.speaker)"
          >
            <div class="font-bold text-gray-700 min-w-[80px]">{{ line.speaker }}:</div>
            <div class="flex-1">
              <p v-if="displayMode !== 'zh'" class="text-lg text-gray-800 mb-1">{{ line.en }}</p>
              <p v-if="displayMode !== 'en'" class="text-gray-500">{{ line.zh }}</p>
            </div>
            <button @click="speak(line.en)" class="text-gray-400 hover:text-blue-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- 阅读类型 -->
        <div v-else-if="lesson.type === 'reading'" class="space-y-4">
          <div class="p-4 bg-gray-50 rounded-xl">
            <p v-if="displayMode !== 'zh'" class="text-lg text-gray-800 leading-relaxed whitespace-pre-line">{{ lesson.content }}</p>
            <p v-if="displayMode !== 'en'" class="text-gray-500 mt-4 leading-relaxed whitespace-pre-line">{{ lesson.translation }}</p>
          </div>
          <button @click="speak(lesson.content)" class="btn btn-secondary text-sm">
            🔊 朗读全文
          </button>
        </div>
      </div>
    </div>

    <!-- 完成学习 -->
    <div class="text-center pt-4">
      <button @click="completeLesson" class="btn btn-primary px-8 py-3 text-lg rounded-2xl">
        ✓ 完成课文学习
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProgressStore } from '../stores/progress'
import { units } from '../data/textbook'
import { speech } from '../utils/speech'

const props = defineProps({ id: String })
const progressStore = useProgressStore()
const unit = computed(() => units[props.id])

const displayMode = ref('both')
const displayModes = [
  { value: 'both', label: '中英' },
  { value: 'en', label: '英文' },
  { value: 'zh', label: '中文' }
]

const speakerColors = {
  'Sally': 'bg-pink-50',
  'Kitty': 'bg-purple-50',
  'Alice': 'bg-blue-50',
  'Peter': 'bg-green-50',
  'Dad': 'bg-gray-50',
  'Mum': 'bg-orange-50',
  'Ms Guo': 'bg-yellow-50'
}

const getSpeakerColor = (speaker) => speakerColors[speaker] || 'bg-gray-50'
const speak = (text) => speech.speak(text)

const completeLesson = () => {
  progressStore.updateLessonProgress(props.id, 1, 1, true)
  alert('恭喜完成课文学习！')
}
</script>
