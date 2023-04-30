import { createStore } from 'vuex'

export default createStore({
  state: {
    step: 1,
    step1Data: null,
    step2Data: null,
    step3Data: null,
    step1Done: false,
    step2Done: false,
    step3Done: false
  },
  getters: {
  },
  mutations: {
    changeStep(state, newStep) {
      state.step = newStep
    }
  },
  actions: {
  },
  modules: {
  }
})
