<template>
  <div class="space-y-8 animate-fade-in">
    <!-- 欢迎区域 -->
    <section class="text-center py-12">
      <div class="inline-block mb-4">
        <span class="text-6xl animate-float inline-block">🌈</span>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold mb-4 rainbow-text">
        欢迎来到英语乐园
      </h1>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        沪教版五年级下册英语学习网站，让学习变得有趣！<br>
        包含4个Module、12个Unit的完整学习内容
      </p>
    </section>

    <!-- 学习概览卡片 -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- 连续学习天数 -->
      <div class="card bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-100">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-3xl shadow-lg">
            🔥
          </div>
          <div>
            <p class="text-gray-500 text-sm">连续学习</p>
            <p class="text-3xl font-bold text-orange-500">{{ progressStore.streakDays }} <span class="text-base font-normal text-gray-500">天</span></p>
          </div>
        </div>
      </div>

      <!-- 总体进度 -->
      <div class="card bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-3xl shadow-lg">
            📊
          </div>
          <div>
            <p class="text-gray-500 text-sm">总体进度</p>
            <p class="text-3xl font-bold text-blue-500">{{ progressStore.overallProgress }} <span class="text-base font-normal text-gray-500">%</span></p>
          </div>
        </div>
      </div>

      <!-- 已掌握单词 -->
      <div class="card bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-100">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-3xl shadow-lg">
            🌟
          </div>
          <div>
            <p class="text-gray-500 text-sm">已掌握单词</p>
            <p class="text-3xl font-bold text-green-500">{{ progressStore.masteredWords.length }} <span class="text-base font-normal text-gray-500">个</span></p>
          </div>
        </div>
      </div>
    </section>

    <!-- 继续学习 / 开始学习 -->
    <section v-if="lastStudiedUnit">
      <div class="card bg-gradient-to-r from-rainbow-blue/10 to-rainbow-purple/10 border-2 border-rainbow-blue/20">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p class="text-gray-500 text-sm mb-1">继续学习</p>
            <h3 class="text-2xl font-bold text-gray-800">{{ lastStudiedUnit.title }} {{ lastStudiedUnit.titleZh }}</h3>
            <p class="text-gray-600 mt-1">上次学习到：{{ lastProgress }}</p>
          </div>
          <router-link
            :to="`/unit/${lastStudiedUnit.id}`"
            class="btn btn-primary px-8 py-3 text-lg rounded-2xl shadow-lg hover:shadow-xl"
          >
            继续学习 →
          </router-link>
        </div>
      </div>
    </section>

    <!-- Module快速入口 -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span>📚</span> 选择模块开始学习
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <router-link
          v-for="module in textbook.modules"
          :key="module.id"
          :to="`/module/${module.id}`"
          class="card group relative overflow-hidden"
          :class="module.bgClass"
        >
          <!-- 装饰背景 -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>

          <div class="relative">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-gray-800">{{ module.title }}</h3>
                <p class="text-gray-600">{{ module.titleZh }}</p>
                <p class="text-sm text-gray-500 mt-1">{{ module.subtitle }}</p>
              </div>
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-md"
                :style="{ backgroundColor: module.color + '20', color: module.color }"
              >
                {{ module.id === 'm1' ? '1' : module.id === 'm2' ? '2' : module.id === 'm3' ? '3' : '4' }}
              </div>
            </div>

            <!-- 进度条 -->
            <div class="mt-4">
              <div class="flex justify-between text-sm text-gray-600 mb-2">
                <span>学习进度</span>
                <span>{{ getModuleProgress(module.id) }}%</span>
              </div>
              <div class="h-2 bg-white/50 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-500"
                  :style="{ width: getModuleProgress(module.id) + '%', backgroundColor: module.color }"
                ></div>
              </div>
            </div>

            <div class="mt-4 flex items-center gap-2 text-sm" :style="{ color: module.color }">
              <span>查看详情</span>
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        </router-link>
      </div>
    </section>

    <!-- 功能介绍 -->
    <section class="py-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">网站功能</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="card text-center p-6 hover:scale-105 transition-transform cursor-pointer" @click="$router.push('/modules')">
          <div class="text-4xl mb-3">📖</div>
          <h4 class="font-bold text-gray-800">课文学习</h4>
          <p class="text-sm text-gray-500 mt-1">中英对照朗读</p>
        </div>
        <div class="card text-center p-6 hover:scale-105 transition-transform cursor-pointer" @click="$router.push('/modules')">
          <div class="text-4xl mb-3">🎯</div>
          <h4 class="font-bold text-gray-800">单词卡片</h4>
          <p class="text-sm text-gray-500 mt-1">翻转学习</p>
        </div>
        <div class="card text-center p-6 hover:scale-105 transition-transform cursor-pointer" @click="$router.push('/modules')">
          <div class="text-4xl mb-3">✍️</div>
          <h4 class="font-bold text-gray-800">单元测验</h4>
          <p class="text-sm text-gray-500 mt-1">智能出题</p>
        </div>
        <div class="card text-center p-6 hover:scale-105 transition-transform cursor-pointer" @click="$router.push('/mistakes')">
          <div class="text-4xl mb-3">📝</div>
          <h4 class="font-bold text-gray-800">错题本</h4>
          <p class="text-sm text-gray-500 mt-1">自动收录</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProgressStore } from '../stores/progress'
import { textbook, units } from '../data/textbook'

const progressStore = useProgressStore()

// 获取Module进度
const getModuleProgress = (moduleId) => {
  const progress = progressStore.getModuleProgress(moduleId)
  return progress.progress
}

// 获取上次学习的单元
const lastStudiedUnit = computed(() => {
  const unitIds = Object.keys(progressStore.unitProgress)
  if (unitIds.length === 0) return null

  // 找到进度最高的单元
  let maxProgress = 0
  let lastUnit = null

  unitIds.forEach(unitId => {
    const unitProgress = progressStore.unitProgress[unitId]
    const progress = unitProgress.progress || 0
    if (progress > maxProgress && progress < 100) {
      maxProgress = progress
      lastUnit = unitId
    }
  })

  // 如果没有进行中的单元，返回第一个单元
  if (!lastUnit) {
    lastUnit = 'u1'
  }

  return units[lastUnit]
})

// 上次学习进度描述
const lastProgress = computed(() => {
  if (!lastStudiedUnit.value) return ''
  const progress = progressStore.getUnitProgress(lastStudiedUnit.value.id)

  if (progress.vocabulary.learned > 0) {
    return `已学习 ${progress.vocabulary.learned} 个单词`
  }
  return '刚开始学习'
})
</script>
