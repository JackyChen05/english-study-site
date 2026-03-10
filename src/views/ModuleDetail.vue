<template>
  <div v-if="module" class="space-y-8 animate-fade-in">
    <!-- 返回按钮 -->
    <router-link
      to="/modules"
      class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
      返回模块列表
    </router-link>

    <!-- Module标题 -->
    <section
      class="p-8 rounded-3xl"
      :class="module.bgClass"
    >
      <div class="flex flex-col md:flex-row items-center gap-6">
        <div
          class="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl font-bold text-white shadow-xl"
          :style="{ backgroundColor: module.color }"
        >
          {{ module.id === 'm1' ? '1' : module.id === 'm2' ? '2' : module.id === 'm3' ? '3' : '4' }}
        </div>
        <div class="text-center md:text-left">
          <h1 class="text-3xl font-bold text-gray-800">{{ module.title }}</h1>
          <p class="text-xl text-gray-700 mt-1">{{ module.titleZh }}</p>
          <p class="text-gray-500 mt-2">{{ module.subtitle }}</p>
        </div>
      </div>

      <!-- Module进度 -->
      <div class="mt-6 pt-6 border-t border-white/30">
        <div class="flex justify-between text-sm text-gray-700 mb-2">
          <span>模块学习进度</span>
          <span>{{ getModuleProgress(module.id) }}%</span>
        </div>
        <div class="h-3 bg-white/50 rounded-full overflow-hidden">
          <div
            class="h-full rounded-full transition-all duration-500"
            :style="{ width: getModuleProgress(module.id) + '%', backgroundColor: module.color }"
          ></div>
        </div>
      </div>
    </section>

    <!-- Unit列表 -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">单元列表</h2>
      <div class="space-y-4">
        <router-link
          v-for="unitId in module.units"
          :key="unitId"
          :to="`/unit/${unitId}`"
          class="card flex items-center gap-4 group hover:shadow-xl transition-all"
        >
          <div
            class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-md group-hover:scale-110 transition-transform"
            :style="{ backgroundColor: module.color }"
          >
            {{ units[unitId].title.replace('Unit ', '') }}
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-800">{{ units[unitId].titleZh }}</h3>
            <p class="text-gray-500 text-sm mt-1">
              {{ units[unitId].vocabulary?.length || 0 }} 个单词 ·
              {{ units[unitId].sentencePatterns?.length || 0 }} 个句型
            </p>
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold" :style="{ color: module.color }">
              {{ getUnitProgress(unitId) }}%
            </div>
            <div class="text-sm text-gray-400">已完成</div>
          </div>
          <div
            class="w-10 h-10 rounded-xl flex items-center justify-center"
            :style="{ backgroundColor: module.color + '15', color: module.color }"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </router-link>
      </div>
    </section>
  </div>

  <div v-else class="text-center py-20">
    <p class="text-gray-500">模块不存在</p>
    <router-link to="/modules" class="btn btn-primary mt-4 inline-block">
      返回模块列表
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProgressStore } from '../stores/progress'
import { textbook, units } from '../data/textbook'

const props = defineProps({
  id: String
})

const progressStore = useProgressStore()

const module = computed(() => {
  return textbook.modules.find(m => m.id === props.id)
})

const getModuleProgress = (moduleId) => {
  const progress = progressStore.getModuleProgress(moduleId)
  return progress.progress
}

const getUnitProgress = (unitId) => {
  const progress = progressStore.getUnitProgress(unitId)
  return progress.progress || 0
}
</script>
