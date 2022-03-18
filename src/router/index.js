import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import HomeHeader from '@/pages/indexHeader.vue'
import Todo from '@/pages/_day.vue'
import TodoHeader from '@/pages/_dayHeader.vue'

const router = createRouter({
  history : createWebHistory(),
  routes : [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        header: HomeHeader
      }
    },
    {
      path: '/:dayId',
      name: 'Todo',
      components: {
        default: Todo,
        header: TodoHeader
      }
    }
  ]
})

export default router