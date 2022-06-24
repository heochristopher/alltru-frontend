export const state = () => ({
    user: null
  })
  
  export const getter = {
    getUser(state) {
      return state.user
    }
  }
  
  export const mutations = {
    SET_USER_DATA(state, userData) {
        state.user = userData
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
      }
  }
  