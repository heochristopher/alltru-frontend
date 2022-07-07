export const state = () => ({
  user: null,
  filters: null,
  alert: null,
  editModal: false,
  resumeModal: false
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
  },
  SET_ALERT(state, alert) {
    if(!alert.response) {return state.alert = alert}
    state.alert = alert.response
  },
  DELETE_USER(state) {
    state.user = null
  },
  SET_EDIT_MODAL(state) {
    state.editModal = !state.editModal
  },
  SET_RESUME_MODAL(state) {
    state.resumeModal = !state.resumeModal
  },
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
  async GET_USER({commit}) {
    try {
      const res = await this.$axios.$get('/validateToken')
      commit('SET_USER_DATA', res)
  } catch (error) {
      console.log(error)
  }
  },
  LOGOUT({commit}) {
    commit('DELETE_USER')
  },
  ADD_FILTERS({commit}, filters) {
    commit('SET_FILTERS', filters)
  },
  GET_ALERT({commit}, alert) {
    commit('SET_ALERT', alert)
  },
  CHANGE_EDIT_MODAL({commit}) {
    commit('SET_EDIT_MODAL')
  },
  CHANGE_RESUME_MODAL({commit}) {
    commit('SET_RESUME_MODAL')
  }
}
