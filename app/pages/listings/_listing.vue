<template>
  <div id="listing-page" class="h-full w-full flex justify-center items-center">
    <navbar />
    <div id="content" class="bg-white w-11/12 max-w-4xl h-auto mt-24 mb-8 pb-6 px-8 flex flex-col justify-start items-center space-y-4 shadow-md">
      <div id="back" class="w-full h-12 flex justify-end items-center z-20 border-b border-solid border-zinc-200">
        <NuxtLink :to="route !== '/dashboard' ? route.fullPath : '/dashboard'">
          <div class="flex justify-center items-center space-x-0.5 mr-3">
            <img class="" src="../../assets/icons/chevron-left.svg" alt="left" />
            <p v-if="route !== '/dashboard'" class="text-sm font-medium">Back to {{ route.name }}</p>
            <p v-else class="text-sm font-medium">Back to dashboard</p>
          </div>
        </NuxtLink>
      </div>
      <div id="info" class="w-full h-auto flex flex-col justify-start items-start space-y-4 pb-6 px-4 border-b border-solid border-zinc-200 relative">
        <h3 v-if="listing.status === 'Closed'" id="closed" class="absolute top-3 right-0 text-md font-semibold px-2 py-1 rounded-full text-red-500">CLOSED</h3>
        <div id="profile" class="w-full flex flex-col justify-start items-start space-y-2 sm:flex-row sm:items-end sm:space-y-0 sm:space-x-4">
          <nuxt-link :to="`/organizations/${listing.org._id}`" id="avatar" class="h-40 w-40 sm:h-28 sm:w-28 md:h-32 md:w-32">
            <img :src="listing.org.avatar" alt="logo" class="object-cover" />
          </nuxt-link>
          <div id="title" class="h-auto overflow-hidden">
            <nuxt-link :to="`/organizations/${listing.org._id}`" class="text-lg text-zinc-500 sm:text-xl">
              {{ listing.org.affiliation }}
            </nuxt-link>
            <h2 class="text-3xl font-medium pb-2 sm:text-4xl">
              {{ listing.position }}
            </h2>
            <div class="flex flex-row justify-start items-center space-x-2">
              <listing-type class="my-auto" :listing="listing" />
              <location class="my-auto" :listing="listing" />
            </div>
          </div>
        </div>
        <div id="general" class="w-full flex flex-col justify-start items-start space-y-4">
          <!-- <div
            id="details"
            class="content-center grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-4 sm:flex sm:justify-center sm:items-center sm:space-x-8 md:space-x-12"
          >
            <div id="payment">
              <p class="uppercase text-xs font-semibold">Payment</p>
              <h5 class="ml-1 text-lg text-zinc-600">Stipend</h5>
            </div>
            <div id="wage">
              <p class="uppercase text-xs font-semibold">Stipend / Wage</p>
              <h5 class="ml-1 text-lg text-zinc-600">$2000</h5>
            </div>
            <div id="commitment">
              <p class="uppercase text-xs font-semibold">Hours per Week</p>
              <h5 class="ml-1 text-lg text-zinc-600">25hrs/week</h5>
            </div>
          </div> -->
          <!-- <div
            id="options"
            class="w-full flex flex-col justify-center items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-start sm:items-start"
          >
            <button
              class="w-11/12 h-12 bg-zinc-100 text-base flex justify-center items-center rounded-md ease-in duration-150 hover:bg-zinc-200 sm:w-52 md:w-56 lg:w-64"
            >
              Save
            </button>
            <button
              class="w-11/12 h-12 bg-zinc-100 text-base flex justify-center items-center rounded-md ease-in duration-150 hover:bg-zinc-200 sm:w-52 md:w-56 lg:w-64"
            >
              <a href="#apply" class="text-base text-black">Apply</a>
            </button>
          </div> -->
        </div>
      </div>
      <!-- <div id="tags"></div> -->
      <div id="description" class="w-full h-auto flex flex-col justify-start items-start space-y-1 pb-2">
        <h5 class="text-xl font-semibold">Description</h5>
        <p class="text-base text-zinc-600 whitespace-pre-wrap">{{ listing.description }}</p>
      </div>
      <div v-if="this.$store.state.user && this.$store.state.user.role === 'Organization' && listing.supplementals && listing.supplementals.length > 0" id="supplementals" class="w-full h-auto flex flex-col justify-start items-start space-y-1 pb-2">
        <h5 class="text-xl font-semibold">Supplementals</h5>
        <div id="supp" class="" v-for="e in listing.supplementals" :key="e">
          <span class="text-md">
            {{ e.prompt }} · <span class="text-md font-semibold">{{ e.input }}</span>
          </span>
          <span v-if="e.input === 'Select'" id="select">
            (
            <span v-for="(option, index) in e.options" :key="option" class="text-md">{{ option }}<span class="text-md" v-if="index !== e.options.length - 1">, </span></span>
            )
          </span>
          <span class="text-red-500 text-md" v-if="!e.optional">*</span>
        </div>
      </div>
      <div id="apply" class="w-full h-auto flex flex-col justify-start items-start space-y-1 pt-4 border-t border-solid border-zinc-200">
        <form method="POST" @submit.prevent="apply(listing._id)" v-if="this.$store.state.user && this.$store.state.user.role === 'Student' && !applied && listing.status !== 'Closed'" id="apply" class="w-full flex flex-col justify-center items-center space-y-4">
          <div class="w-full flex flex-col justify-center items-start space-y-1">
            <h5 class="text-xl font-semibold">Apply</h5>
            <p class="text-zinc-600 text-base pb-2">Your profile and resume will be sent automatically to the organization when you apply.</p>
          </div>
          <div v-if="listing.supplementals && listing.supplementals.length > 0" id="supplementals" class="w-full h-auto flex flex-col justify-start items-start space-y-3 pt-4 border-t border-solid border-zinc-200 pb-2">
            <h5 class="text-xl font-semibold">Supplementals</h5>
            <div id="supp" class="w-full space-y-1" v-for="(supp, index) in listing.supplementals" :key="supp">
              <h6 class="text-md">{{ supp.prompt }} <span class="text-red-500 text-md" v-if="!supp.optional">*</span></h6>
              <textarea v-if="supp.input === 'Text'" class="w-full h-24 px-3 py-2 rounded-md border-zinc-200 border-solid border text-sm focus:border-violet-500" id="biography" name="biography" v-model="answers[index.toString()].input" placeholder="Answer" :required="!supp.optional" />
              <div v-if="supp.input === 'File'" class="flex flex-col justify-center items-start">
                <label :for="supp.identifier" class="w-1/3 flex flex-col justify-center items-center text-sm text-zinc-500 font-medium pt-1 cursor-pointer">
                  <div class="w-full h-10 text-sm bg-zinc-600 text-white flex justify-center items-center rounded-md ease-in duration-150 hover:bg-zinc-700">Upload File</div>
                  <input :id="supp.identifier" type="file" accept="application/pdf" :ref="supp.identifier" @change="setImage(supp.identifier)" :required="!supp.optional" />
                </label>
              </div>
              <select v-if="supp.input === 'Select'" class="w-1/3 border border-zinc-200 text-zinc-500 text-sm rounded-md focus:ring-violet-500 focus:border-violet-500 block py-2.5 px-2 mt-2.5" type="number" name="floating_month" v-model="answers[index.toString()].input" :required="!supp.optional">
                <option disabled selected value="">Answer</option>
                <option v-for="option in supp.options" :key="option" :value="option">{{ option }}</option>
              </select>
            </div>
          </div>
          <button class="w-full h-10 text-sm bg-violet-400 text-white flex justify-center items-center rounded-md ease-in duration-150 sm:w-1/2 hover:bg-violet-500" type="submit">Apply</button>
        </form>
        <div v-else-if="this.$store.state.user && this.$store.state.user.role === 'Student' && !applied && listing.status === 'Closed'" class="" id="">
          <h5 id="closed" class="text-xl font-semibold">This listing is closed</h5>
          <p class="text-zinc-600 text-base pb-2">Email the organization if you have any questions!</p>
        </div>
        <div class="w-full h-auto flex flex-col justify-start items-start space-y-1 pb-2" v-else-if="applied">
          <h5 class="text-xl font-semibold">Applied</h5>
          <p class="text-zinc-600 text-base pb-2">Check your email for updates from this organization!</p>
        </div>
        <div class="w-full" v-else-if="this.$store.state.user && this.$store.state.user.role === 'Organization' && listing.org._id === this.$store.state.user._id">
          <h5 class="text-xl font-semibold">Applicants</h5>
          <div id="applicants" class="flex flex-col space-y-4 mt-2 w-full">
            <applicant v-for="applicant in applicants" :key="applicant._id" :user="applicant" />
          </div>
        </div>
      </div>
      <div v-if="this.$store.state.user && this.$store.state.user.role === 'Organization' && listing.org._id === this.$store.state.user._id && listing.status !== 'Closed'" id="logout" class="border-t border-solid border-zinc-200 w-full flex justify-center">
        <button @click="closeListing(listing._id)" class="max-w-sm h-12 text-base font-mediu ease-in duration-150 text-red-500 hover:text-red-600">Close Listing</button>
      </div>
    </div>
    <alert />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  async asyncData({ $axios, params, store, from, $set }) {
    const id = params.listing
    let route = '/dashboard'
    if (from) {
      route = from
    }
    const listing = await $axios.$get(`/findListing/${id}`)
    let applied = null
    let user = null
    let applicants = null
    let answers = {}
    for (let i = 0; i < listing.supplementals.length; i++) {
      answers[i.toString()] = {
        identifier: i,
        input: '',
      }
    }
    if (store.state.user) {
      user = await $axios.$get('/sendUser')
      if (user.role === 'Student') {
        applied = user.appliedListings.find((e) => e === listing._id)
        return { listing, user, applied, route, applicants, answers }
      } else if (user._id === listing.org._id) {
        applicants = await $axios.$get(`/queryApplicants/${listing._id}`)
        return { listing, user, applied, route, applicants }
      } else if (user._id !== listing.org._id) {
        return { listing, user, applied, route, applicants }
      }
    }
    return { listing, user, applied, route, applicants }
  },
  methods: {
    async apply(id) {
      try {
        let answers = []
        let files = []
        for (const property in this.answers) {
          if (this.answers[property].input !== '') {
            if (typeof this.answers[property].input === 'object') {
              files.push({
                identifier: parseInt(this.answers[property].identifier),
                input: this.answers[property].input,
              })
            } else {
              answers.push({
                identifier: parseInt(this.answers[property].identifier),
                answer: this.answers[property].input,
              })
            }
          }
        }
        const res = await this.$axios.$post(`/apply/${id}`, {
          supplementals: answers,
        })
        if (files.length > 0) {
          // files.forEach(async (file) => {
          //   await this.$axios.$patch(`/uploadSupplemental/${id}-${file.identifier}`, file.input)
          // })
          // for await (const file of files) {
          //   await this.$axios.$patch(`/uploadSupplemental/${id}-${file.identifier}`, file.input)
          // }
          // await Promise.all(
          //   files.map(async (file) => {
          //     await this.$axios.$patch(`/uploadSupplemental/${id}-${file.identifier}`, file.input)
          //   })
          // )

          for (let i = 0; i < files.length; i++) {
            const file = files[i]
            await this.$axios.$patch(`/uploadSupplemental/${id}-${file.identifier}`, file.input)
          }
        }
        this.$nuxt.refresh()
        this.$store.dispatch('GET_ALERT', res)
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
    async closeListing(id) {
      try {
        const res = await this.$axios.patch('/closeListing', {
          id: id,
        })
        this.$nuxt.refresh()
        this.$store.dispatch('GET_ALERT', res)
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
    setImage(id) {
      const file = this.$refs[id.toString()][0].files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      const formData = new FormData()
      formData.append('image', file)
      this.answers[id.toString()].input = formData
    },
  },
}
</script>

<style></style>
