import { createRouter, createWebHistory } from 'vue-router'

// Import your pages
import Home from '../pages/Home.vue'
import Chatbot from '../pages/ChatBot.vue'
import Settings from '../pages/Settings.vue'
import Modules from '../pages/Modules.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/chatbot', name: 'Chatbot', component: Chatbot },
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/modules', name: 'Modules', component: Modules },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
