export default function ({ store, redirect }) {
  if (!store.state.user) {
    redirect('/login')
    return store.dispatch('GET_ALERT', { status: 400, data: 'You must be logged in to access that page' })
  }
}
