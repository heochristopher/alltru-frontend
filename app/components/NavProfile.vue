<template>
  <div class="w-auto h-12 aspect-square overflow-hidden rounded-full">
    <img @click="clicked = !clicked" :src="user.avatar" class="object-cover" alt="" />
    <div v-if="clicked" id="menu-content" class="fixed top-0 right-0 w-full h-auto bg-white shadow-md flex flex-col justify-center items-end space-y-4 -z-20 pt-24 pb-6 sm:hidden">
      <NuxtLink to="/dashboard" class="mr-10 text-lg text-zinc-900 ease-in duration-100 hover:text-zinc-800">Dashboard</NuxtLink>
      <NuxtLink v-if="user.role === 'Organization'" to="/create-listing" class="mr-10 text-lg text-zinc-900 ease-in duration-100 hover:text-zinc-800">Create Listing</NuxtLink>
      <button @click="logout" to="/" class="mr-10 text-lg text-red-600 ease-in duration-100 hover:text-red-700">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.state.user,
      clicked: false,
    }
  },
  methods: {
    async logout() {
      try {
        const res = await this.$axios.$post('/logout')
        this.$store.dispatch('LOGOUT')
        this.$router.push('/')
        this.$store.dispatch('GET_ALERT', res)
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
  },
}
</script>

<style>
</style>