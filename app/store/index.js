export const state = () => ({
  user: null,
  filters: null,
})

export const getter = {
  getUser(state) {
    return state.user
  }
}

export const mutations = {
  SET_USER_DATA(state, userData) {
      state.user = userData
  },
  SET_FILTERS(state, filters) {
    state.filters = filters
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
      try {
          const res = await this.$axios.$get('/validateToken')
          commit('SET_USER_DATA', res)
      } catch (error) {
          console.log(error)
      }
    },
  ADD_FILTERS({commit}, filters) {
    commit('SET_FILTERS', filters)
  }
}
