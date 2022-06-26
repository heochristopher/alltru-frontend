<template>
  <div
    id="listing"
    class="w-full h-auto overflow-visible flex justify-center item-center rounded-lg shadow-md m-2"
  >
    <div id="content" class="w-full h-full flex justify-center items-start p-4">
      <nuxt-link
        :to="`/listings/${listing._id}`"
        id="info"
        class="w-4/5 h-full flex justify-start items-start space-x-4"
      >
        <div id="pic" class="w-16 h-16">
          <img class="object-cover" :src="listing.org.avatar" alt="" />
        </div>
        <div id="container" class="flex flex-col justify-center items-start">
          <h4 class="text-md">{{ listing.org.affiliation }}</h4>
          <h3 class="text-xl mb-2 font-medium">{{ listing.position }}</h3>
          <div
            class="flex flex-col justify-center items-start space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
          >
            <listing-type class="my-auto" :listing="listing" />
            <location class="my-auto" :listing="listing" />
          </div>
          <p class="text-gray-500 text-sm mt-4" id="date">Posted {{ date }}</p>
        </div>
      </nuxt-link>
      <!-- <listing-options :id="listing._id" :isSaved="isSaved"/> -->
      <div id="options" class="w-1/5 h-full flex flex-col justify-center items-center space-y-4 my-auto sm:w-1/3 sm:flex-row sm:space-y-0 sm:space-x-4">
        <save-btn :id="listing._id" :isSaved="isSaved"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listing: Object,
    isSaved: Boolean
  },
  computed: {
    date() {
      const past = new Date(this.listing.date).getTime()
      const difference = Date.now() - past
      const date = Math.floor(difference / (1000 * 3600 * 24))
      if (date === 1) {
        return '1 day ago'
      } else if (date === 0) {
        return 'today'
      }
      return `${Math.floor(difference / (1000 * 3600 * 24))} days ago`
    },
  },
}
</script>
