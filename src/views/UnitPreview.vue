<template>
  <div v-if="unit" class="space-y-8 animate-fade-in">
    <!-- 返回 -->
    <router-link :to="`/unit/${unit.id}`" class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
      返回单元
    </router-link>

    <!-- 标题 -->
    <section class="card bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100">
      <h1 class="text-2xl font-bold text-gray-800 mb-2">课文预习</h1>
      <p class="text-gray-600">{{ unit.title }} {{ unit.titleZh }}</p>
    </section>

    <!-- 单元介绍 -->
    <section class="card">
      <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span class="text-2xl">📖</span> 单元介绍
      </h2>
      <p class="text-gray-600 leading-relaxed">{{ unit.preview?.introduction }}</p>
    </section>

    <!-- 学习目标 -->
    <section class="card">
      <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span class="text-2xl">🎯</span> 学习目标
      </h2>
      <ul class="space-y-3">
        <li v-for="(goal, index) in unit.preview?.goals" :key="index" class="flex items-start gap-3">
          <span class="w-6 h-6 rounded-full bg-gradient-to-r from-rainbow-blue to-rainbow-purple text-white flex items-center justify-center text-sm flex-shrink-0">
            {{ index + 1 }}
          </span>
          <span class="text-gray-600">{{ goal }}</span>
        </li>
      </ul>
    </section>

    <!-- 预习问题 -->
    <section class="card">
      <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span class="text-2xl">❓</span> 预习问题
      </h2>
      <div class="space-y-4">
        <details v-for="(q, index) in unit.preview?.questions" :key="index" class="group">
          <summary class="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
            <span class="font-medium text-gray-800">{{ q.q }}</span>
            <span class="text-rainbow-blue group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <div class="p-4 text-gray-600 bg-blue-50 rounded-b-xl mt-[-8px]">
            {{ q.a }}
          </div>
        </details>
      </div>
    </section>

    <!-- 核心词汇预览 -->
    <section class="card">
      <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span class="text-2xl">📚</span> 核心词汇预览
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button
          v-for="word in unit.vocabulary?.slice(0, 8)"
          :key="word.word"
          @click="speak(word.word)"
          class="p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors text-left group"
        >
          <div class="font-medium text-gray-800">{{ word.word }}</div>
          <div class="text-sm text-gray-500">{{ word.meaning }}</div>
        </button>
      </div>
      <p v-if="(unit.vocabulary?.length || 0) > 8" class="text-center text-gray-400 mt-4">
        还有 {{ unit.vocabulary.length - 8 }} 个单词...
      </p>
    </section>

    <!-- 开始学习按钮 -->
    <div class="text-center">
      <router-link :to="`/unit/${unit.id}/lesson`" class="btn btn-primary px-8 py-3 text-lg rounded-2xl">
        开始学习课文 →
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { units } from '../data/textbook'
import { speech } from '../utils/speech'

const props = defineProps({ id: String })
const unit = computed(() => units[props.id])

const speak = (text) => speech.speak(text)
</script>
