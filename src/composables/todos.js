import { useStore } from 'vuex'
import { computed } from 'vue'

export const useTodos = () => {
  const store = useStore()

  const todos = computed(() => store.getters['todos/todos'])

  const addTodo = ({ data, dayId }) => {
    store.dispatch('todos/addTodo', { data, dayId })
  }

  const checkTodo = ({ index, checked, dayId }) => {
    store.dispatch('todos/checkTodo', { index, checked, dayId })
  }

  const deleteTodo = ({ index, dayId }) => {
    store.dispatch('todos/deleteTodo', { index, dayId })
  }

  const updateTodo = ({ index, dayId, subject }) => {
    store.dispatch('todos/updateTodo', { index, dayId, subject })
  }

  return {
    todos,
    addTodo,
    checkTodo,
    deleteTodo,
    updateTodo
  }
}