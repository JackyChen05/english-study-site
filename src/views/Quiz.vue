<template>
  <div v-if="unit" class="space-y-6 animate-fade-in">
    <router-link :to="`/unit/${unit.id}`" class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
      返回单元
    </router-link>

    <!-- 测验进行中 -->
    <div v-if="!isFinished">
      <div class="card mb-6">
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-2xl font-bold text-gray-800">单元测验</h1>
          <span class="text-gray-500">题目 {{ currentIndex + 1 }} / {{ allQuestions.length }}</span>
        </div>
        <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-rainbow-blue to-rainbow-purple rounded-full transition-all"
            :style="{ width: ((currentIndex + 1) / allQuestions.length * 100) + '%' }">
          </div>
        </div>
      </div>

      <div class="card" v-if="currentQuestion">
        <div class="mb-2">
          <span class="text-sm px-3 py-1 rounded-full" :class="getTypeClass(currentQuestion.type)">
            {{ getTypeLabel(currentQuestion.type) }}
          </span>
        </div>

        <h2 class="text-xl font-medium text-gray-800 mb-6">{{ currentQuestion.question }}</h2>

        <!-- 选择题 -->
        <div v-if="currentQuestion.options" class="space-y-3">
          <button v-for="(option, index) in currentQuestion.options" :key="index"
            @click="selectAnswer(option)"
            class="w-full p-4 text-left rounded-xl border-2 transition-all"
            :class="getOptionClass(option)">
            {{ option }}
          </button>
        </div>

        <div v-if="isAnswered" class="mt-4 p-4 rounded-xl" :class="isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'">
          {{ isCorrect ? '✓ 回答正确！' : '✗ 回答错误，正确答案是：' + currentQuestion.answer }}
        </div>

        <div class="flex justify-end mt-6">
          <button v-if="isAnswered" @click="nextQuestion" class="btn btn-primary">
            {{ currentIndex < allQuestions.length - 1 ? '下一题 →' : '查看结果' }}
          </button>
        </div>
      </div>
    </div>

    <!-- 测验结果 -->
    <div v-else class="card text-center py-12">
      <div class="text-6xl mb-4">{{ score >= 80 ? '🎉' : score >= 60 ? '👍' : '💪' }}</div>
      <h2 class="text-3xl font-bold text-gray-800 mb-2">测验完成！</h2>
      <p class="text-gray-600 mb-6">你的得分</p>
      <div class="text-6xl font-bold mb-6" :class="score >= 80 ? 'text-green-500' : score >= 60 ? 'text-blue-500' : 'text-orange-500'">
        {{ score }}
      </div>
      <p class="text-gray-500 mb-8">答对 {{ correctCount }} / {{ allQuestions.length }} 题</p>

      <div class="flex justify-center gap-4">
        <button @click="restartQuiz" class="btn btn-secondary">重新测验</button>
        <router-link :to="`/unit/${unit.id}`" class="btn btn-primary">返回单元</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProgressStore } from '../stores/progress'
import { useMistakesStore } from '../stores/mistakes'
import { units } from '../data/textbook'
import { generateQuiz, checkAnswer } from '../utils/quiz-generator'

const props = defineProps({ id: String })
const progressStore = useProgressStore()
const mistakesStore = useMistakesStore()

const unit = computed(() => units[props.id])
const quiz = computed(() => generateQuiz(props.id))
const allQuestions = computed(() => [
  ...quiz.value.vocabulary,
  ...quiz.value.grammar,
  ...quiz.value.sentence
])

const currentIndex = ref(0)
const userAnswer = ref(null)
const isAnswered = ref(false)
const isCorrect = ref(false)
const isFinished = ref(false)
const score = ref(0)
const correctCount = ref(0)
const wrongQuestions = ref([])

const currentQuestion = computed(() => allQuestions.value[currentIndex.value])

const getTypeClass = (type) => ({
  'vocabulary': 'bg-blue-100 text-blue-700',
  'grammar': 'bg-purple-100 text-purple-700',
  'sentence': 'bg-green-100 text-green-700'
}[type] || 'bg-gray-100')

const getTypeLabel = (type) => ({
  'vocabulary': '单词题',
  'grammar': '语法题',
  'sentence': '句型题'
}[type] || type)

const getOptionClass = (option) => {
  if (!isAnswered.value) return 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
  if (option === currentQuestion.value.answer) return 'border-green-500 bg-green-50'
  if (option === userAnswer.value && option !== currentQuestion.value.answer) return 'border-red-500 bg-red-50'
  return 'border-gray-200 opacity-50'
}

const selectAnswer = (answer) => {
  if (isAnswered.value) return
  userAnswer.value = answer
  isAnswered.value = true
  isCorrect.value = checkAnswer(currentQuestion.value, answer)

  if (isCorrect.value) {
    correctCount.value++
  } else {
    wrongQuestions.value.push({
      ...currentQuestion.value,
      userAnswer: answer
    })
  }
}

const nextQuestion = () => {
  if (currentIndex.value < allQuestions.value.length - 1) {
    currentIndex.value++
    userAnswer.value = null
    isAnswered.value = false
    isCorrect.value = false
  } else {
    finishQuiz()
  }
}

const finishQuiz = () => {
  isFinished.value = true
  score.value = Math.round((correctCount.value / allQuestions.value.length) * 100)
  progressStore.updateQuizProgress(props.id, score.value)

  // 保存错题
  wrongQuestions.value.forEach(q => {
    mistakesStore.addMistake(q.type, q, q.userAnswer)
  })
}

const restartQuiz = () => {
  currentIndex.value = 0
  userAnswer.value = null
  isAnswered.value = false
  isCorrect.value = false
  isFinished.value = false
  score.value = 0
  correctCount.value = 0
  wrongQuestions.value = []
}
</script>
