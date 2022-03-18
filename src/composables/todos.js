import { useStore } from 'vuex'
import { computed } from 'vue'

export const useTodos = () => {
  const store = useStore()

  const todos = computed(() => store.getters['todos/todos'])

  const addTodo = ({ data, dayId }) => {
    store.dispatch('todos/addTodo', { data, dayId })
  }

  const toggleTodo = ({ index, checked, dayId }) => {
    store.dispatch('todos/toggleTodo', { index, checked, dayId })
  }

  const deleteTodo = ({ index, dayId }) => {
    store.dispatch('todos/deleteTodo', { index, dayId })
  }

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  }
}