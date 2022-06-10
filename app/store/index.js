// import { createStore } from 'vuex'

// const store = createStore({
//   state: {
//     isHidden: false,
//     tempStore: [],
//   },
//   mutations: {
//     openModal(state, payload) {
//       state.isHidden = true
//       state.tempStore.push(payload)
//     },
//     closeModal(state) {
//       state.isHidden = false
//       state.tempStore = []
//     },
//   },
//   actions: {
//     openModal({ commit }, payload) {
//       const popupPost = {
//         title: payload.title,
//         location: payload.location,
//         imageUrl: payload.imageUrl,
//         author: payload.author,
//         description: payload.description,
//         postDate: payload.postDate,
//         uuid: payload.uuid,
//       }
//       commit('openModal', popupPost)
//     },
//     closeModal({ commit }) {
//       commit('closeModal')
//     },
//   },
// })

// export default store
