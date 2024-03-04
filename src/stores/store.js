import { defineStore } from 'pinia'

export const store = defineStore({
  id: 'store',
  state: () => ({
    loading: false
  }),
  getters: {
    getLoading(state) {
      return state.loading
    }
  },
  actions: {
    setLoading(status) {
      this.loading = status
    }
  }
})