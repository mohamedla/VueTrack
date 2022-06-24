import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
    decrese (state) {
      state.counter--
    },
    increse (state) {
      state.counter++
    }
  },
  actions: {
  },
  modules: {
  }
})
