export default {
  namespaced: true,
  state: {
    todos: {
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: []
    }
  },
  mutations: {
    ADD_TODO(state, { data, dayId }) {
      state.todos[dayId].push(data)
    },
    TOGGLE_TODO(state, { index, checked, dayId }) {
      state.todos[dayId][index].completed = checked
    },
    DELETE_TODO(state, { index, dayId }) {
      state.todos[dayId].splice(index, 1)
    }
  },
  actions: {
    addTodo({ commit }, payload) {
      commit('ADD_TODO', payload)
    },
    toggleTodo({ commit }, payload) {
      commit('TOGGLE_TODO', payload)
    },
    deleteTodo({ commit }, payload) {
      commit('DELETE_TODO', payload)
    }
  },
  getters: {
    todos(state) {
      return state.todos
    }
  }
}