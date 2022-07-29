<template>
  <div id="student" class="">
    <div id="">
      <navbar />
      <div class="w-full h-auto mt-28 flex flex-col justify-center items-center space-y-6 pb-8">
        <div id="user-info" class="w-11/12 max-w-4xl h-auto flex justify-between items-start rounded-lg shadow-md sm:p-4">
          <div class="flex flex-col justify-start items-start space-y-4">
            <user :user="user" class="w-5/6 sm:w-full" />
            <div v-if="user.website" id="website" class="w-5/6 mx-4">
              <a :href="user.website.includes('https://' || 'http://') ? user.website : `http://${user.website}`" class="text-zinc-600 text-sm sm:text-base hover:text-blue-500 hover:underline" target="_blank">{{ user.website }}</a>
            </div>
            <div v-if="user.biography" id="bio" class="w-5/6 mx-4">
              <p class="text-zinc-600 text-sm whitespace-pre-wrap sm:text-base">{{ user.biography }}</p>
            </div>
            <contact-info :mail="user.email" :github="user.contact.github" :linkedin="user.contact.linkedIn" />
          </div>
        </div>
        <div id="resume" class="py-4 w-11/12 max-w-4xl h-auto flex flex-col justify-between items-start sm:items-center rounded-lg shadow-md space-y-4 sm:flex-row sm:p-4">
          <div class="fixed inset-0 w-screen h-screen z-50 flex justify-center items-center" v-if="this.$store.state.resume === user.resume && this.$store.state.resume !== null">
            <div id="overlay" class="absolute inset-0 w-full h-full bg-black opacity-70 -z-10" @click="toggleResume"></div>
            <div id="content" class="w-11/12 max-w-4xl h-5/6 flex flex-col justify-center items-center z-50 bg-white rounded shadow-md">
              <iframe :src="`https://docs.google.com/gview?url=${user.resume}&embedded=true`" frameborder="0" class="w-full h-full"></iframe>
            </div>
          </div>
          <h2 class="text-2xl font-semibold mx-4">Resume</h2>
          <div class="space-y-6 ml-4 flex flex-col items-start sm:flex-row sm:mr-2 sm:items-center sm:space-y-0 sm:space-x-6">
            <button v-if="user.resume" @click="toggleResume(user.resume)" id="" class="flex justify-center items-center space-x-4 sm:space-x-2 h-full hover:text-zinc-600">
              <img src="@/assets/icons/external-link.svg" alt="" class="" />
              <p>View</p>
            </button>
            <a v-if="user.resume" id="" target="_blank" :href="`https://docs.google.com/viewerng/viewer?url=${user.resume}`" class="flex justify-center items-center space-x-4 sm:space-x-2 hover:text-zinc-600">
              <img src="@/assets/icons/download.svg" alt="" class="" />
              <p>Download</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const id = params.student
    try {
      const user = await $axios.$get(`/sendOther/${id}`)
      return { user }
    } catch (error) {
      this.$store.dispatch('GET_ALERT', error)
    }
  },
  methods: {
    toggleResume(resume) {
      this.$store.dispatch('CHANGE_RESUME_MODAL', resume)
    },
  },
}
</script>

<style>
</style>