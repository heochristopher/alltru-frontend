<template>
  <div id="student" class="">
    <div id="overlay" class="absolute inset-0 w-screen h-screen opacity-0 z-10" v-if="showOptions" @click="showOptions = false"></div>
    <div id="">
      <navbar />
      <div class="w-full h-auto mt-28 flex flex-col justify-center items-center space-y-6 pb-8">
        <div id="user-info" class="w-11/12 max-w-4xl h-auto flex justify-between items-start rounded-lg shadow-md sm:p-4">
          <div class="flex flex-col justify-start items-start space-y-4">
            <user :user="user" class="w-5/6 sm:w-full" />
            <div v-if="user.biography" id="bio" class="w-4/5 mx-4">
              <p class="text-zinc-600 text-sm whitespace-pre-wrap sm:text-base">{{ user.biography }}</p>
            </div>
            <contact-info :mail="user.email" :github="user.contact.github" :linkedin="user.contact.linkedIn" />
          </div>
          <div class="absolute right-6 sm:w-1/5 sm:relative sm:right-0">
            <edit-profile :bio="user.biography" />
          </div>
        </div>
        <div id="resume" class="py-4 w-11/12 max-w-4xl h-auto flex flex-col justify-between items-start sm:items-center rounded-lg shadow-md space-y-4 sm:flex-row sm:p-4">
          <div class="fixed inset-0 w-screen h-screen z-50 flex justify-center items-center" v-if="this.$store.state.resumeModal">
            <div id="overlay" class="absolute inset-0 w-full h-full bg-black opacity-70 -z-10" @click="toggleResume"></div>
            <div id="content" class="w-11/12 max-w-4xl h-5/6 flex flex-col justify-center items-center z-50 bg-white rounded shadow-md">
              <iframe :src="`https://docs.google.com/gview?url=${user.resume}&embedded=true`" frameborder="0" class="w-full h-full"></iframe>
            </div>
          </div>
          <h2 class="text-2xl font-semibold mx-4">Resume</h2>
          <div class="space-y-6 ml-4 flex flex-col items-start sm:flex-row sm:mr-2 sm:items-center sm:space-y-0 sm:space-x-6">
            <button v-if="user.resume" @click="toggleResume" id="" class="flex justify-center items-center space-x-4 sm:space-x-2 h-full hover:text-zinc-600">
              <img src="@/assets/icons/external-link.svg" alt="" class="" />
              <p>View</p>
            </button>
            <a v-if="user.resume" id="" target="_blank" :href="`https://docs.google.com/viewerng/viewer?url=${user.resume}`" class="flex justify-center items-center space-x-4 sm:space-x-2 hover:text-zinc-600">
              <img src="@/assets/icons/download.svg" alt="" class="" />
              <p>Download</p>
            </a>
            <label for="resume-input" id="" class="flex justify-center items-center hover:text-zinc-600">
              <input id="resume-input" type="file" enctype="multipart/form-data" accept="application/pdf" class="hidden" @change="setImage" />
              <img src="@/assets/icons/upload-cloud.svg" alt="" class="mr-4 sm:mr-2" />
              <p>Upload</p>
            </label>
            <button v-if="user.resume" @click="deleteResume" id="" class="flex justify-center items-center space-x-4 sm:space-x-2 hover:text-red-300">
              <img src="@/assets/icons/trash.svg" alt="" class="" />
              <p class="text-red-500">Delete</p>
            </button>
          </div>
        </div>
        <div id="listings" class="w-11/12 max-w-4xl mb-4 h-auto flex flex-col justify-start items-start rounded-lg shadow-md p-4 sm:py-4 sm:px-8">
          <h2 class="text-2xl font-semibold">My Listings</h2>
          <div class="w-full flex justify-center items-center">
            <div id="toggles" class="flex h-12 w-full max-w-2xl justify-evenly divide-x items-center text-base text-zinc-400 rounded-md border-zinc-200 border-solid border mt-3">
              <toggle v-model="selected" value="applied" class="w-1/2">Applied</toggle>
              <toggle v-model="selected" value="saved" class="w-1/2">Saved</toggle>
            </div>
          </div>
          <div v-if="selected === 'applied'" id="applied" class="w-full mt-4">
            <h3 class="text-lg font-medium text-zinc-600">Applied Listings</h3>
            <div class="w-full flex flex-col justify-center items-center">
              <listing class="max-w-3xl" v-for="listing in applied" :key="listing._id" :listing="listing" :isSaved="user.savedListings.includes(listing._id)" />
            </div>
          </div>
          <div v-else id="saved" class="w-full mt-4">
            <h3 class="text-lg font-medium text-zinc-600">Saved Listings</h3>
            <div class="w-full flex flex-col justify-center items-center">
              <listing class="max-w-3xl" v-for="listing in saved" :key="listing._id" :listing="listing" :isSaved="user.savedListings.includes(listing._id)" />
            </div>
          </div>
        </div>
        <div id="logout" class="w-11/12 max-w-4xl h-auto flex justify-center items-center rounded-lg shadow-md p-2 sm:p-4">
          <button @click="logout" class="w-full max-w-sm h-12 text-base font-medium bg-white flex justify-center items-center rounded-md ease-in duration-150 text-red-500 hover:text-red-600">Logout</button>
        </div>
      </div>
    </div>
    <alert />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'applied',
      showOptions: false,
    }
  },
  methods: {
    toggleResume() {
      this.showOptions = false
      this.$store.dispatch('CHANGE_RESUME_MODAL')
    },
    async deleteResume() {
      try {
        const res = await this.$axios.patch('/deleteResume')
        this.$nuxt.refresh()
        this.$store.dispatch('GET_ALERT', res)
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
    async setImage(e) {
      const resume = e.target.files[0]
      const formData = new FormData()
      formData.append('image', resume)
      try {
        const res = await this.$axios.patch('/uploadResume', formData)
        this.$nuxt.refresh()
        this.$store.dispatch('GET_ALERT', res)
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
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
  props: {
    user: Object,
    saved: Array,
    applied: Array,
  },
}
</script>
