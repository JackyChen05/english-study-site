<template>
  <div v-if="unit" class="space-y-6 animate-fade-in">
    <router-link :to="`/unit/${unit.id}`" class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
      返回单元
    </router-link>

    <h1 class="text-2xl font-bold text-gray-800">句型学习</h1>

    <div v-for="(pattern, index) in unit.sentencePatterns" :key="index" class="card">
      <div class="mb-4">
        <span class="text-sm text-gray-500">句型 {{ index + 1 }}</span>
        <h2 class="text-xl font-bold text-blue-700 mt-1">{{ pattern.pattern }}</h2>
        <p class="text-gray-600">{{ pattern.meaning }}</p>
      </div>

      <div class="space-y-3">
        <div v-for="(example, eIndex) in pattern.examples" :key="eIndex" class="p-3 bg-gray-50 rounded-lg">
          <p class="text-gray-800 font-medium">{{ example.en }}</p>
          <p class="text-gray-500 text-sm">{{ example.zh }}</p>
        </div>
      </div>

      <div v-if="pattern.practice" class="mt-4 pt-4 border-t">
        <p class="text-sm text-gray-500 mb-2">替换练习：</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="(word, wIndex) in pattern.practice[0]?.words" :key="wIndex"
            class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
            {{ word }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { units } from '../data/textbook'

const props = defineProps({ id: String })
const unit = computed(() => units[props.id])
</script>
