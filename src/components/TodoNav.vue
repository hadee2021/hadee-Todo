<template>
  <div>
    <div>{{ route.params.dayId }} 나의 할일</div>
    <div>{{ completedCount }} / {{ todos[route.params.dayId].length }} 개</div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useTodos } from '@/composables/todos'
import { computed } from 'vue'
export default {
  setup() {
    const route = useRoute()
    const { todos } = useTodos()

    const completedCount = computed(() => {
      const dayTodoList = todos.value[route.params.dayId]
      return dayTodoList.filter(todo => todo.completed).length
    })
      
    return {
      route,
      todos,
      completedCount
    }
  }
}
</script>

<style>

</style>