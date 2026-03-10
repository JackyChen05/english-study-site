<template>
  <div v-if="unit" class="space-y-8 animate-fade-in">
    <!-- 返回按钮 -->
    <router-link
      :to="`/module/${unit.moduleId}`"
      class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
      返回模块
    </router-link>

    <!-- Unit标题 -->
    <section
      class="p-8 rounded-3xl text-center"
      :class="module.bgClass"
    >
      <p class="font-medium" :style="{ color: module.color }">{{ unit.title }}</p>
      <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mt-2">{{ unit.titleZh }}</h1>
      <p class="text-gray-600 mt-2">{{ unit.subtitle }}</p>

      <!-- 进度条 -->
      <div class="mt-6 max-w-md mx-auto">
        <div class="flex justify-between text-sm text-gray-700 mb-2">
          <span>学习进度</span>
          <span>{{ getProgress() }}%</span>
        </div>
        <div class="h-3 bg-white/50 rounded-full overflow-hidden">
          <div
            class="h-full rounded-full transition-all duration-500"
            :style="{ width: getProgress() + '%', backgroundColor: module.color }"
          ></div>
        </div>
      </div>
    </section>

    <!-- 功能入口网格 -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">选择学习内容</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <!-- 课文预习 -->
        <router-link
          :to="`/unit/${unit.id}/preview`"
          class="card text-center p-6 hover:scale-105 transition-all group"
        >
          <div
            class="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-shadow"
            :style="{ backgroundColor: module.color + '20' }"
          >
            📋
          </div>
          <h3 class="font-bold text-gray-800">课文预习</h3>
          <p class="text-sm text-gray-500 mt-1">单元介绍、目标</p>
        </router-link>

        <!-- 课文学习 -->
        <router-link
          :to="`/unit/${unit.id}/lesson`"
          class="card text-center p-6 hover:scale-105 transition-all group"
        >
          <div
            class="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-shadow"
            :style="{ backgroundColor: module.color + '20' }"
          >
            📖
          </div>
          <h3 class="font-bold text-gray-800">课文学习</h3>
          <p class="text-sm text-gray-500 mt-1">中英对照朗读</p>
        </router-link>

        <!-- 单词学习 -->
        <router-link
          :to="`/unit/${unit.id}/vocabulary`"
          class="card text-center p-6 hover:scale-105 transition-all group"
        >
          <div
            class="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-shadow"
            :style="{ backgroundColor: module.color + '20' }"
          >
            🎯
          </div>
          <h3 class="font-bold text-gray-800">单词学习</h3>
          <p class="text-sm text-gray-500 mt-1">{{ unit.vocabulary?.length || 0 }} 个单词</p>
        </router-link>

        <!-- 语法学习 -->
        <router-link
          :to="`/unit/${unit.id}/grammar`"
          class="card text-center p-6 hover:scale-105 transition-all group"
        >
          <div
            class="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-shadow"
            :style="{ backgroundColor: module.color + '20' }"
          >
            📐
          </div>
          <h3 class="font-bold text-gray-800">语法学习</h3>
          <p class="text-sm text-gray-500 mt-1">语法点讲解</p>
        </router-link>

        <!-- 句型学习 -->
        <router-link
          :to="`/unit/${unit.id}/sentences`"
          class="card text-center p-6 hover:scale-105 transition-all group"
        >
          <div
            class="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-shadow"
            :style="{ backgroundColor: module.color + '20' }"
          >
            💬
          </div>
          <h3 class="font-bold text-gray-800">句型学习</h3>
          <p class="text-sm text-gray-500 mt-1">{{ unit.sentencePatterns?.length || 0 }} 个句型</p>
        </router-link>

        <!-- 单元测验 -->
        <router-link
          :to="`/unit/${unit.id}/quiz`"
          class="card text-center p-6 hover:scale-105 transition-all group"
        >
          <div
            class="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-shadow"
            :style="{ backgroundColor: module.color + '20' }"
          >
            ✍️
          </div>
          <h3 class="font-bold text-gray-800">单元测验</h3>
          <p class="text-sm text-gray-500 mt-1">测试掌握程度</p>
        </router-link>
      </div>
    </section>

    <!-- 学习建议 -->
    <section class="card bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-100">
      <div class="flex items-start gap-4">
        <div class="text-3xl">💡</div>
        <div>
          <h3 class="font-bold text-gray-800 mb-2">学习建议</h3>
          <ul class="text-gray-600 space-y-1">
            <li>1. 先完成课文预习，了解单元目标</li>
            <li>2. 认真学习课文和单词</li>
            <li>3. 掌握语法点和句型</li>
            <li>4. 完成单元测验检验学习效果</li>
          </ul>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="text-center py-20">
    <p class="text-gray-500">单元不存在</p>
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

const unit = computed(() => {
  return units[props.id]
})

const module = computed(() => {
  if (!unit.value) return null
  return textbook.modules.find(m => m.id === unit.value.moduleId)
})

const getProgress = () => {
  if (!unit.value) return 0
  const progress = progressStore.getUnitProgress(unit.value.id)
  return progress.progress || 0
}
</script>
