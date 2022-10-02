import { createRouter, createWebHistory } from 'vue-router'
import NewTask from '@/views/NewTask.vue'
import HomePage from '@/views/HomePage.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/homepage', name: 'homepage', component: HomePage},
    {path: '/newtask', name: 'newtask', component: NewTask}
  ]
})

export default router
