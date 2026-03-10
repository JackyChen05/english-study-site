<template>
  <div id="app" class="min-h-screen bg-[#FFF9F0]">
    <!-- 顶部导航 -->
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-rainbow-blue to-rainbow-purple flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
            E
          </div>
          <span class="font-bold text-lg text-gray-800 hidden sm:block">英语乐园</span>
        </router-link>

        <!-- 导航链接 -->
        <div class="flex items-center gap-2 sm:gap-4">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-3 py-2 rounded-xl text-sm font-medium transition-all"
            :class="$route.path === link.path ? 'bg-gradient-to-r from-rainbow-blue to-rainbow-purple text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'"
          >
            <span class="hidden sm:inline">{{ link.name }}</span>
            <span class="sm:hidden text-lg">{{ link.icon }}</span>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- 主内容区 -->
    <main class="max-w-6xl mx-auto px-4 py-6">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 底部 -->
    <footer class="mt-auto py-6 text-center text-gray-500 text-sm">
      <p>沪教版五年级下册英语学习网站</p>
      <p class="mt-1">让学习变得有趣 🌈</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProgressStore } from './stores/progress'
import { useMistakesStore } from './stores/mistakes'

const progressStore = useProgressStore()
const mistakesStore = useMistakesStore()

const navLinks = [
  { path: '/', name: '首页', icon: '🏠' },
  { path: '/modules', name: '课本', icon: '📚' },
  { path: '/progress', name: '进度', icon: '📊' },
  { path: '/mistakes', name: '错题本', icon: '📝' }
]

onMounted(() => {
  // 从localStorage加载数据
  progressStore.loadFromStorage()
  mistakesStore.loadFromStorage()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
