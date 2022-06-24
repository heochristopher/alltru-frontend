<template>
  <div
    id="listing"
    class="w-full h-auto flex justify-center item-center rounded-lg shadow-md m-2"
  >
    <div id="content" class="w-full h-full flex justify-center items-start p-4">
      <div
        id="info"
        class="w-4/5 h-full flex justify-start items-start space-x-4"
      >
        <div id="pic" class="w-16 h-16">
          <img class="object-cover" :src="listing.org.avatar" alt="" />
        </div>
        <div id="container" class="flex flex-col justify-center items-start">
          <h4 class="text-md">{{ listing.org.affiliation }}</h4>
          <h3 class="text-xl mb-2">{{ listing.position }}</h3>
          <div
            class="flex flex-col justify-center items-start space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
          >
            <Listing-type class="my-auto" :listing="listing" />
            <location class="my-auto" :listing="listing" />
          </div>
          <p class="text-gray-500 text-sm mt-4" id="date">Posted {{date}} days ago</p>
        </div>
      </div>
      <div
        id="options"
        class="w-1/5 h-full flex flex-col justify-center items-center space-y-4 my-auto sm:w-1/3 sm:flex-row sm:space-y-0 sm:space-x-4"
      >
        <button
          class="w-16 h-8 rounded-md bg-zinc-200 hover:bg-zinc-300 sm:w-20"
        >
          Save
        </button>
        <button
          class="w-16 h-8 rounded-md bg-zinc-200 hover:bg-zinc-300 sm:w-20"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ListingType from './ListingType.vue'
export default {
  props: {
    listing: Object,
  },
  computed: {
    date() {
      const past = new Date(this.listing.date).getTime()
      const difference = Date.now() - past
      return difference / (1000 * 3600 * 24)
    }
  }
}
</script>

<style lang="scss" scoped></style>
