import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import modules from './modules'

export default createStore({
  modules: modules,
  plugins: [
    createPersistedState()
  ]
})