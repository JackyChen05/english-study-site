import { createRouter, createWebHistory } from 'vue-router'

// 页面组件
import Home from './views/Home.vue'
import Modules from './views/Modules.vue'
import ModuleDetail from './views/ModuleDetail.vue'
import UnitHome from './views/UnitHome.vue'
import UnitPreview from './views/UnitPreview.vue'
import UnitLesson from './views/UnitLesson.vue'
import Vocabulary from './views/Vocabulary.vue'
import Grammar from './views/Grammar.vue'
import Sentences from './views/Sentences.vue'
import Quiz from './views/Quiz.vue'
import Progress from './views/Progress.vue'
import Mistakes from './views/Mistakes.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/modules', name: 'Modules', component: Modules },
  { path: '/module/:id', name: 'ModuleDetail', component: ModuleDetail, props: true },
  { path: '/unit/:id', name: 'UnitHome', component: UnitHome, props: true },
  { path: '/unit/:id/preview', name: 'UnitPreview', component: UnitPreview, props: true },
  { path: '/unit/:id/lesson', name: 'UnitLesson', component: UnitLesson, props: true },
  { path: '/unit/:id/vocabulary', name: 'Vocabulary', component: Vocabulary, props: true },
  { path: '/unit/:id/grammar', name: 'Grammar', component: Grammar, props: true },
  { path: '/unit/:id/sentences', name: 'Sentences', component: Sentences, props: true },
  { path: '/unit/:id/quiz', name: 'Quiz', component: Quiz, props: true },
  { path: '/progress', name: 'Progress', component: Progress },
  { path: '/mistakes', name: 'Mistakes', component: Mistakes }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
