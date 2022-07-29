<template>
  <div class="max-w-4xl w-full h-auto flex flex-col justify-between items-center rounded-lg shadow-md p-2 space-y-2 sm:p-4 sm:flex-row sm:space-x-4">
    <div class="fixed inset-0 w-screen h-screen z-50 flex justify-center items-center" v-if="this.$store.state.resume === user.resume && this.$store.state.resume !== null">
      <div id="overlay" class="absolute inset-0 w-full h-full bg-black opacity-70 -z-10" @click="toggleResume"></div>
      <div id="content" class="w-11/12 max-w-4xl h-5/6 flex flex-col justify-center items-center z-50 bg-white rounded shadow-md">
        <iframe :src="`https://docs.google.com/gview?url=${user.resume}&embedded=true`" frameborder="0" class="w-full h-full"></iframe>
      </div>
    </div>
    <nuxt-link :to="`/students/${user._id}`" class="hover:text-gray-500 w-full sm:w-3/4 sm:h-20 md:h-24">
      <div class="mx-4 flex flex-row space-x-2">
        <img :src="user.avatar" class="w-14 h-14 aspect-square overflow-hidden rounded-full sm:w-16 sm:h-16 md:w-20 md:h-20" alt="" />
        <div class="flex flex-col justify-center">
          <h2 class="text-xl font-semibold truncate sm:text-2xl md:text-3xl">
            {{ `${user.firstName} ${user.lastName}, ${age}` }}
          </h2>
          <h4 class="text-gray-500 text-sm sm:text-md md:text-lg">
            {{ user.affiliation }}
          </h4>
        </div>
      </div>
    </nuxt-link>
    <div id="actions" class="flex flex-row space-x-10 w-full max-w-lg h-12 justify-center items-center text-center m-4 sm:w-1/4 sm:flex-col sm:space-y-4 sm:h-20 sm:space-x-0 md:h-24">
      <a id="email" class="w-3/5 h-4/5 text-md bg-violet-400 text-white flex justify-center items-center rounded-md ease-in duration-150 hover:bg-violet-500 sm:w-full sm:h-full" :href="`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${user.email}`" target="_blank">Send Email</a>
      <button v-if="user.resume" id="resume" class="w-3/5 h-4/5 text-md bg-violet-400 text-white flex justify-center items-center rounded-md ease-in duration-150 hover:bg-violet-500 sm:w-full sm:h-full" @click="toggleResume(user.resume)">View Resume</button>
      <div v-else id="no-resume" class="m-auto flex text-center justify-center items-center w-3/5 h-4/5 text-md sm:w-full sm:h-full">
        <h1>Resume N/A</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  methods: {
    toggleResume(resume) {
      this.$store.dispatch('CHANGE_RESUME_MODAL', resume)
    },
  },
  computed: {
    age() {
      const today = new Date()
      const birthday = new Date(this.user.birthday)
      const age = today.getFullYear() - birthday.getFullYear()
      const m = today.getMonth() - birthday.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--
      }
      return age
    },
  },
}
</script>

<style>
</style>