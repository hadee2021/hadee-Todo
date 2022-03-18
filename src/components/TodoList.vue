<template>
  <div class="todo-container">
    <div 
      v-for="(todo, index) in todos[route.params.dayId]"
      :key="todo.no"
      class="todo-card"
    >
      <div>
        <input 
          type="checkbox" 
          :value="todo.completed"
          @change="toggleCheck(index, $event)"
          @click.stop
        />
        <span
          :class="{ todoCheck : todo.completed }"
        >
          {{ todo.subject }}
        </span>
      </div>
      <i class="fa-solid fa-xmark" @click.stop="deleteTodoRequest(index)"></i>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useTodos } from '@/composables/todos'
export default {
  setup() {
    const route = useRoute()
    const {
      todos,
      toggleTodo,
      deleteTodo
    } = useTodos()

    const toggleCheck = (index, event) => {
      const dayId = route.params.dayId
      const checked = event.target.checked
      toggleTodo({ index, checked, dayId })
    }

    const deleteTodoRequest = (index) => {
      const dayId = route.params.dayId
      deleteTodo({ index, dayId })
    }

    return {
      route,
      todos,
      toggleCheck,
      deleteTodoRequest
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
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 30px;
    background-color: var(--white);
    margin-top: 5px;
    padding: 0 15px;
  }
  span {
    padding: 0px 5px;
  }
  .todoCheck {
    color: gray;
    text-decoration: line-through;
  }
  i {
    cursor: pointer;
    margin-top: 5px;
    
  }
</style>