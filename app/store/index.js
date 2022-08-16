export const state = () => ({
  user: null,
  filters: null,
  alert: null,
  editModal: false,
  resume: null,
  application: null,
  keyword: null,
  registerType: 'Student',
})

export const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData
  },
  SET_FILTERS(state, filters) {
    state.filters = filters
  },
  SET_ALERT(state, alert) {
    if (!alert.response) {
      return (state.alert = alert)
    }
    state.alert = alert.response
  },
  REMOVE_ALERT(state) {
    state.alert = null
  },
  DELETE_USER(state) {
    state.user = null
  },
  SET_EDIT_MODAL(state) {
    state.editModal = !state.editModal
  },
  SET_RESUME_MODAL(state, resume) {
    if (state.resume) {
      return (state.resume = null)
    }
    state.resume = resume
  },
  SET_APPLICATION_MODAL(state, app) {
    if (state.application) {
      return (state.application = null)
    }
    state.application = app
  },
  SET_REGISTER_TYPE(state, type) {
    type === 'Org' ? (state.registerType = 'Org') : (state.registerType = 'Student')
  },
  SET_SEARCH_QUERY(state, keyword) {
    state.keyword = keyword
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const res = await this.$axios.$get('/validateToken')
      commit('SET_USER_DATA', res)
    } catch (error) {
      state.alert = error
    }
  },
  async GET_USER({ commit }) {
    try {
      const res = await this.$axios.$get('/validateToken')
      commit('SET_USER_DATA', res)
    } catch (error) {
      state.alert = error
    }
  },
  LOGOUT({ commit }) {
    commit('DELETE_USER')
  },
  ADD_FILTERS({ commit }, filters) {
    commit('SET_FILTERS', filters)
  },
  GET_ALERT({ commit }, alert) {
    commit('SET_ALERT', alert)
    setTimeout(() => {
      commit('REMOVE_ALERT')
    }, '4000')
  },
  CHANGE_EDIT_MODAL({ commit }) {
    commit('SET_EDIT_MODAL')
  },
  CHANGE_RESUME_MODAL({ commit }, resume) {
    commit('SET_RESUME_MODAL', resume)
  },
  CHANGE_APPLICATION_MODAL({ commit }, app) {
    commit('SET_APPLICATION_MODAL', app)
  },
  REGISTER_TYPE({ commit }, type) {
    commit('SET_REGISTER_TYPE', type)
  },
  ADD_SEARCH_QUERY({ commit }, keyword) {
    commit('SET_SEARCH_QUERY', keyword)
  },
}
