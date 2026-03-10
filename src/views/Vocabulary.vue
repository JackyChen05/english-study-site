<template>
  <div v-if="unit" class="space-y-6 animate-fade-in">
    <!-- 返回和标题 -->
    <div class="flex items-center justify-between">
      <router-link
        :to="`/unit/${unit.id}`"
        class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        返回单元
      </router-link>
      <h1 class="text-2xl font-bold text-gray-800">单词学习</h1>
      <div class="text-sm text-gray-500">
        {{ currentIndex + 1 }} / {{ unit.vocabulary?.length || 0 }}
      </div>
    </div>

    <!-- 进度条 -->
    <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        class="h-full bg-gradient-to-r from-rainbow-blue to-rainbow-purple rounded-full transition-all duration-300"
        :style="{ width: ((currentIndex + 1) / (unit.vocabulary?.length || 1)) * 100 + '%' }"
      ></div>
    </div>

    <!-- 翻转卡片 -->
    <div class="flex justify-center py-8">
      <div
        class="flip-card w-80 h-96 cursor-pointer"
        :class="{ 'flipped': isFlipped }"
        @click="flipCard"
      >
        <div class="flip-card-inner">
          <!-- 正面 -->
          <div class="flip-card-front card flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100">
            <div class="text-6xl mb-4">🎯</div>
            <h2 class="text-4xl font-bold text-gray-800 mb-2">{{ currentWord?.word }}</h2>
            <p class="text-xl text-gray-500">{{ currentWord?.phonetic }}</p>
            <p class="text-sm text-gray-400 mt-4">点击翻转查看释义</p>
          </div>

          <!-- 背面 -->
          <div class="flip-card-back card flex flex-col items-center justify-center bg-gradient-to-br from-white to-purple-50 border-2 border-purple-100">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ currentWord?.meaning }}</h3>
            <p class="text-lg text-gray-500 mb-4">{{ currentWord?.type }}</p>
            <div class="px-4 py-2 bg-gray-50 rounded-xl">
              <p class="text-gray-600 italic">"{{ currentWord?.example }}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 控制按钮 -->
    <div class="flex justify-center gap-4">
      <button
        @click="speakWord"
        class="btn btn-secondary flex items-center gap-2"
        :disabled="!currentWord"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
        </svg>
        朗读
      </button>

      <button
        v-if="!isMastered"
        @click="markMastered"
        class="btn btn-primary flex items-center gap-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        已掌握
      </button>

      <button
        v-else
        @click="unmarkMastered"
        class="btn flex items-center gap-2 bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        已掌握
      </button>
    </div>

    <!-- 导航按钮 -->
    <div class="flex justify-between pt-4">
      <button
        @click="prevWord"
        :disabled="currentIndex === 0"
        class="btn btn-secondary disabled:opacity-50"
      >
        ← 上一个
      </button>

      <button
        @click="nextWord"
        :disabled="currentIndex === (unit.vocabulary?.length || 0) - 1"
        class="btn btn-primary disabled:opacity-50"
      >
        下一个 →
      </button>
    </div>

    <!-- 单词列表缩略图 -->
    <div class="card mt-8">
      <h3 class="font-bold text-gray-800 mb-4">单词列表</h3>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(word, index) in unit.vocabulary"
          :key="word.word"
          @click="goToWord(index)"
          class="px-3 py-1.5 rounded-lg text-sm transition-all"
          :class="{
            'bg-gradient-to-r from-rainbow-blue to-rainbow-purple text-white': currentIndex === index,
            'bg-gray-100 text-gray-600 hover:bg-gray-200': currentIndex !== index && !isWordMastered(word.word),
            'bg-yellow-100 text-yellow-700': currentIndex !== index && isWordMastered(word.word)
          }"
        >
          {{ word.word }}
        </button>
      </div>
    </div>
  </div>

  <div v-else class="text-center py-20">
    <p class="text-gray-500">单元不存在</p>
    <router-link to="/modules" class="btn btn-primary mt-4 inline-block">
      返回模块列表
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useProgressStore } from '../stores/progress'
import { units } from '../data/textbook'
import { speech } from '../utils/speech'

const props = defineProps({
  id: String
})

const progressStore = useProgressStore()

const unit = computed(() => units[props.id])
const currentIndex = ref(0)
const isFlipped = ref(false)

const currentWord = computed(() => {
  return unit.value?.vocabulary?.[currentIndex.value]
})

const isMastered = computed(() => {
  return currentWord.value && progressStore.masteredWords.includes(currentWord.value.word)
})

const isWordMastered = (word) => {
  return progressStore.masteredWords.includes(word)
}

const flipCard = () => {
  isFlipped.value = !isFlipped.value
}

const speakWord = () => {
  if (currentWord.value) {
    speech.speak(currentWord.value.word)
  }
}

const markMastered = () => {
  if (currentWord.value) {
    progressStore.addMasteredWord(currentWord.value.word)
  }
}

const unmarkMastered = () => {
  if (currentWord.value) {
    progressStore.removeMasteredWord(currentWord.value.word)
  }
}

const nextWord = () => {
  if (currentIndex.value < (unit.value?.vocabulary?.length || 0) - 1) {
    currentIndex.value++
    isFlipped.value = false
  }
}

const prevWord = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    isFlipped.value = false
  }
}

const goToWord = (index) => {
  currentIndex.value = index
  isFlipped.value = false
}

// 监听索引变化，保存进度
watch(currentIndex, (newIndex) => {
  if (unit.value) {
    progressStore.updateVocabularyProgress(
      unit.value.id,
      newIndex + 1,
      unit.value.vocabulary?.length || 0
    )
  }
})
</script>

<style scoped>
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 20px;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
