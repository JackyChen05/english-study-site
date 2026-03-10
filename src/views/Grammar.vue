<template>
  <div v-if="unit" class="space-y-6 animate-fade-in">
    <router-link :to="`/unit/${unit.id}`" class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
      返回单元
    </router-link>

    <h1 class="text-2xl font-bold text-gray-800">语法学习</h1>

    <div class="card bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100">
      <h2 class="text-2xl font-bold text-purple-800 mb-2">{{ unit.grammar?.title }}</h2>
      <p class="text-gray-600">{{ unit.grammar?.explanation }}</p>
    </div>

    <section class="card">
      <h3 class="text-xl font-bold text-gray-800 mb-4">语法要点</h3>
      <div class="space-y-4">
        <div v-for="(point, index) in unit.grammar?.points" :key="index" class="p-4 bg-gray-50 rounded-xl">
          <div class="font-medium text-blue-700 mb-2">{{ point.rule }}</div>
          <div class="text-gray-600">例句：{{ point.example }}</div>
        </div>
      </div>
    </section>

    <section v-if="unit.grammar?.notes?.length" class="card bg-yellow-50 border-2 border-yellow-100">
      <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>⚠️</span> 注意事项
      </h3>
      <ul class="space-y-2">
        <li v-for="(note, index) in unit.grammar.notes" :key="index" class="flex items-start gap-2 text-gray-700">
          <span class="text-yellow-500">•</span>
          <span>{{ note }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { units } from '../data/textbook'

const props = defineProps({ id: String })
const unit = computed(() => units[props.id])
</script>
