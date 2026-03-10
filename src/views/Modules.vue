<template>
  <div class="space-y-8 animate-fade-in">
    <!-- 标题 -->
    <section class="text-center py-8">
      <h1 class="text-3xl md:text-4xl font-bold mb-3 rainbow-text">
        选择学习单元
      </h1>
      <p class="text-gray-600">
        沪教版五年级下册 · 4个Module · 12个Unit
      </p>
    </section>

    <!-- Module列表 -->
    <section class="space-y-8">
      <div v-for="module in textbook.modules" :key="module.id" class="space-y-4">
        <!-- Module标题 -->
        <div
          class="flex items-center gap-4 p-4 rounded-2xl"
          :class="module.bgClass"
        >
          <div
            class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-lg"
            :style="{ backgroundColor: module.color }"
          >
            {{ module.id === 'm1' ? '1' : module.id === 'm2' ? '2' : module.id === 'm3' ? '3' : '4' }}
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800">{{ module.title }}</h2>
            <p class="text-gray-600">{{ module.titleZh }}</p>
            <p class="text-sm text-gray-500">{{ module.subtitle }}</p>
          </div>
        </div>

        <!-- Unit卡片网格 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <router-link
            v-for="unitId in module.units"
            :key="unitId"
            :to="`/unit/${unitId}`"
            class="card group hover:scale-[1.02] transition-all"
          >
            <div class="flex items-start justify-between">
              <div>
                <p class="text-sm font-medium" :style="{ color: module.color }">
                  {{ units[unitId].title }}
                </p>
                <h3 class="text-xl font-bold text-gray-800 mt-1">
                  {{ units[unitId].titleZh }}
                </h3>
                <p class="text-sm text-gray-500 mt-1">
                  {{ units[unitId].vocabulary?.length || 0 }} 个单词
                </p>
              </div>
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                :style="{ backgroundColor: module.color + '15', color: module.color }"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            <!-- 进度条 -->
            <div class="mt-4">
              <div class="flex justify-between text-xs text-gray-500 mb-1">
                <span>学习进度</span>
                <span>{{ getUnitProgress(unitId) }}%</span>
              </div>
              <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-500"
                  :style="{ width: getUnitProgress(unitId) + '%', backgroundColor: module.color }"
                ></div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useProgressStore } from '../stores/progress'
import { textbook, units } from '../data/textbook'

const progressStore = useProgressStore()

const getUnitProgress = (unitId) => {
  const progress = progressStore.getUnitProgress(unitId)
  return progress.progress || 0
}
</script>
