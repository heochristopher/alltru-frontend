<template>
  <div id="student" class="">
    <div id="">
      <navbar />
      <div class="w-full h-auto mt-28 flex flex-col justify-center items-center space-y-6 pb-8">
        <div id="user-info" class="w-11/12 max-w-4xl h-auto flex justify-between items-start rounded-lg shadow-md sm:p-4">
          <div class="flex flex-col justify-start items-start space-y-4">
            <user :user="user" class="w-5/6 sm:w-full" />
            <div v-if="user.biography" id="bio" class="w-5/6 mx-4">
              <p class="text-zinc-600 text-sm whitespace-pre-wrap sm:text-base">{{ user.biography }}</p>
            </div>
            <contact-info :mail="user.email" :github="user.contact.github" :linkedin="user.contact.linkedIn" />
          </div>
        </div>
        <div id="resume" class="py-4 w-11/12 max-w-4xl h-auto flex justify-between items-center rounded-lg shadow-md sm:p-4">
          <h2 class="text-2xl font-semibold mx-4">Resume</h2>
          <div v-if="user.resume">
            <button class="bg-grey mx-4" @click="toggleResume">View Resume</button>
            <div class="fixed inset-0 w-screen h-screen z-50 flex justify-center items-center" v-if="this.$store.state.resumeModal">
              <div id="overlay" class="absolute inset-0 w-full h-full bg-black opacity-70 -z-10" @click="toggleResume"></div>
              <div id="content" class="w-11/12 max-w-4xl h-5/6 flex flex-col justify-center items-center z-50 bg-white rounded shadow-md">
                <iframe :src="`https://docs.google.com/gview?url=${user.resume}&embedded=true`" frameborder="0" class="w-full h-full"></iframe>
              </div>
            </div>
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
    toggleResume() {
      this.$store.dispatch('CHANGE_RESUME_MODAL')
    },
  },
}
</script>

<style>
</style>