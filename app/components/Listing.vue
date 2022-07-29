<template>
  <div :to="`/listings/${listing._id}`" id="listing" class="w-full h-auto overflow-visible flex justify-center item-center rounded-lg shadow-md m-2 relative">
    <div id="notification" class="absolute right-3 top-3 w-8 h-8 rounded-full bg-red-500 flex justify-center items-center text-center" v-if="isDashboard && listing.notifications">
      <p class="text-white" id="">{{ listing.notifications }}</p>
    </div>
    <div id="content" class="w-full h-full flex justify-center items-start p-4">
      <nuxt-link @click.native="readNotification" :to="`/listings/${listing._id}`" id="info" class="w-full h-full flex justify-start items-start space-x-4 sm:pl-6 sm:py-3 sm:items-center">
        <div id="pic" class="w-auto h-20 aspect-square overflow-hidden sm:h-28">
          <img class="object-cover" :src="listing.org.avatar" alt="" />
        </div>
        <div id="container" class="flex flex-col justify-center items-start">
          <h4 class="text-base text-zinc-500">{{ listing.org.affiliation }}</h4>
          <h3 class="text-xl mb-2 font-medium">{{ listing.position }}</h3>
          <div class="flex flex-col justify-center items-start space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <listing-type class="my-auto" :listing="listing" />
            <location class="my-auto" :listing="listing" />
          </div>
          <p class="text-zinc-500 text-sm mt-4" id="date">Posted {{ date }}</p>
        </div>
      </nuxt-link>
      <!-- <listing-options :id="listing._id" :isSaved="isSaved"/> -->
      <div id="options" class="w-1/5 h-full flex flex-col justify-center items-center space-y-4 my-auto sm:w-1/3 sm:flex-row sm:space-y-0 sm:space-x-4">
        <save-btn :id="listing._id" :isSaved="isSaved" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listing: Object,
    isSaved: Boolean,
    isDashboard: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    async readNotification() {
      try {
        if (!this.isDashboard) {
          return
        }
        await this.$axios.$request({
          url: `/readNotification/${this.listing._id}`,
          method: 'delete',
        })
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
  },
  computed: {
    date() {
      const past = new Date(this.listing.date).getTime()
      const difference = Date.now() - past
      const date = Math.floor(difference / (1000 * 3600 * 24))
      if (date === 1) {
        return 'yesterday'
      } else if (date === 0) {
        return 'today'
      } else if (date > 1 && date < 30) {
        return `${Math.floor(difference / (1000 * 3600 * 24))} days ago`
      } else if (date >= 30 && date < 60) {
        return `${Math.floor(difference / (1000 * 3600 * 24 * 30)) | 0} month ago`
      } else if (date >= 60 && date < 365) {
        return `${Math.floor(difference / (1000 * 3600 * 24 * 30)) | 0} months ago`
      } else if (date >= 365 && date < 730) {
        return `${Math.floor(difference / (1000 * 3600 * 24 * 30)) | 0} year ago`
      } else if (date >= 730) {
        return `${Math.floor(difference / (1000 * 3600 * 24 * 30)) | 0} years ago`
      }
    },
  },
}
</script>
