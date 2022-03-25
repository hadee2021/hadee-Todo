<template>
  <div class="todo-container">
    <div 
      v-for="(todo, index) in todos[route.params.dayId]"
      :key="todo.no"
      class="todo-card"
    >
      <TodoContext 
        :todo="todo"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useTodos } from '@/composables/todos'
import TodoContext from '@/components/TodoContext.vue'
export default {
  components: { 
    TodoContext
  },
  setup() {
    const route = useRoute()
    const { todos } = useTodos()

    return {
      route,
      todos
    }
  }
}
</script>

<style scoped>
  .todo-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 25px;
  }
  .todo-card {
    width: 50%;
    height: 40px;
    background-color: var(--white);
    margin-top: 5px;
    padding: 0 15px;
    border: 1px solid #dedede;
  }
</style>