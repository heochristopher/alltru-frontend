<template>
  <div id="listing-page" class="h-full w-full flex justify-center items-center">
    <navbar />
    <div
      id="content"
      class="bg-white w-11/12 max-w-4xl h-auto mt-24 mb-8 pb-6 px-8 flex flex-col justify-start items-center space-y-4 shadow-md"
    >
      <div
        id="back"
        class="w-full h-12 flex justify-end items-center z-20 border-b border-solid border-zinc-200"
      >
        <NuxtLink to="/listings">
          <div class="flex justify-center items-center space-x-0.5 mr-3">
            <img
              class=""
              src="../../assets/icons/chevron-left.svg"
              alt="left"
            />
            <p class="text-sm font-medium">Back to Listings</p>
          </div>
        </NuxtLink>
      </div>
      <div
        id="info"
        class="w-full h-auto flex flex-col justify-start items-start space-y-4 pb-6 px-4 border-b border-solid border-zinc-200"
      >
        <div
          id="profile"
          class="w-full flex flex-col justify-start items-start space-y-2 sm:flex-row sm:items-end sm:space-y-0 sm:space-x-4"
        >
          <div id="avatar" class="h-40 w-40 sm:h-28 sm:w-28 md:h-32 md:w-32">
            <img :src="listing.org.avatar" alt="logo" class="object-cover" />
          </div>
          <div id="title" class="h-auto overflow-hidden">
            <h3 class="text-lg sm:text-xl">
              {{ listing.org.affiliation }}
            </h3>
            <h2 class="text-3xl font-medium pb-2 sm:text-4xl">
              {{ listing.position }}
            </h2>
            <div class="flex flex-row justify-start items-center space-x-2">
              <listing-type class="my-auto" :listing="listing" />
              <location class="my-auto" :listing="listing" />
            </div>
          </div>
        </div>
        <div
          id="general"
          class="w-full flex flex-col justify-start items-start space-y-4"
        >
          <div
            id="details"
            class="content-center grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-4 sm:flex sm:justify-center sm:items-center sm:space-x-8 md:space-x-12"
          >
            <div id="payment">
              <p class="uppercase text-xs font-semibold">Payment</p>
              <h5 class="ml-1 text-lg">Stipend</h5>
            </div>
            <div id="wage">
              <p class="uppercase text-xs font-semibold">Stipend / Wage</p>
              <h5 class="ml-1 text-lg">$2000</h5>
            </div>
            <div id="commitment">
              <p class="uppercase text-xs font-semibold">Hours per Week</p>
              <h5 class="ml-1 text-lg">25hrs/week</h5>
            </div>
          </div>
          <!-- <div
            id="options"
            class="w-full flex flex-col justify-center items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-start sm:items-start"
          >
            <button
              class="w-11/12 h-12 bg-zinc-100 text-md flex justify-center items-center rounded-md ease-in duration-150 hover:bg-zinc-200 sm:w-52 md:w-56 lg:w-64"
            >
              Save
            </button>
            <button
              class="w-11/12 h-12 bg-zinc-100 text-md flex justify-center items-center rounded-md ease-in duration-150 hover:bg-zinc-200 sm:w-52 md:w-56 lg:w-64"
            >
              <a href="#apply" class="text-md text-black">Apply</a>
            </button>
          </div> -->
        </div>
      </div>
      <!-- <div id="tags"></div> -->
      <div
        id="description"
        class="w-full h-auto flex flex-col justify-start items-start space-y-1 pb-2"
      >
        <h5 class="text-xl font-semibold">Description</h5>
        <p class="text-md">{{ listing.description }}</p>
      </div>
      <div class="w-full h-auto flex flex-col justify-center items-center space-y-1 pt-4 border-t border-solid border-zinc-200">
        <form
          v-if="this.$store.state.user && this.$store.state.user.role === 'Student' && !applied"
          method="POST"
          @submit.prevent="apply(listing._id)"
          id="apply"
          class=""
        >
          <div class="w-full flex flex-col justify-start items-start space-y-1">
            <h5 class="text-xl font-semibold">Apply</h5>
            <p class="text-md pb-2">
              Your information and resume will be sent automatically to the
              organization when you apply.
            </p>
            <textarea
              class="w-full h-36 px-3 py-2 bg-zinc-100 rounded-md border-zinc-300 border-solid border"
              id="notes"
              name="notes"
              v-model="notes"
              placeholder="Please include any additional information you would like to provide."
              required
            />
          </div>
          <form-btn  class="w-full pt-3 flex flex-col justify-center items-center sm:w-1/2 lg:w-5/12">Apply</form-btn>
        </form>
        <div class="w-full h-auto flex flex-col justify-start items-start space-y-1 pb-2" v-else-if="applied">
          <h5 class="text-xl font-semibold">Applied</h5>
          <h6 class="text-md">Your Application:</h6>
          <p class="text-md font-light">{{applied.note}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: null,
    }
  },
  async asyncData({ $axios, params, store }) {
    const id = params.listing
    const listing = await $axios.$get(`/findListing/${id}`)
    let applied = null
    let user = null
    if(store.state.user) {
      user = await $axios.$get('/sendUser')
      if(user.role === 'Student') {
        applied = user.appliedListings.find(e => e._id === listing._id)
        console.log(applied)
        return {listing, user, applied}
      }
    }
    return { listing, user, applied }
  },
  methods: {
    async apply(id) {
      try {
        const res = await this.$axios.$post(`/apply/${id}`, {note: this.notes})
        this.$nuxt.refresh()
        this.$store.dispatch('GET_ALERT', res)
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    }
  }
}
</script>

<style></style>
