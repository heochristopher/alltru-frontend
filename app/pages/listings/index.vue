<template>
  <div id="home">
    <navbar />
    <alert />
    <div
      id="content"
      class="w-full h-full flex flex-col justify-center items-center mt-20 lg:flex-row lg:items-start lg:space-x-10"
    >
      <div
        id="filters"
        class="w-5/6 max-w-lg flex justify-center items-center my-6 lg:w-1/3 lg:max-w-md lg:ml-4"
      >
        <search />
      </div>
      <div
        v-if="query === null"
        class="w-11/12 max-w-3xl h-full flex flex-col justify-start items-center pb-6 lg:h-screen lg:overflow-y-auto lg:w-2/3"
      >
        <listing
          v-for="listing in listings"
          :key="listing.position"
          :listing="listing"
          :isSaved="!user ? null : user.savedListings.includes(listing._id)"
        />
      </div>
      <div
        v-else
        id="filters"
        class="w-11/12 h-full flex flex-col justify-start items-center lg:h-screen lg:overflow-y-auto lg:w-2/3"
      >
        <listing
          v-for="listing in query"
          :key="listing.position"
          :listing="listing"
          :isSaved="!user ? null : user.savedListings.includes(listing._id)"
        />
      </div>
    </div>
    <page-footer/>
  </div>
</template>

<script>
export default {
  name: 'Listings',
  data() {
    return {
      query: null,
    }
  },
  async asyncData({ $axios, store }) {
    const listings = await $axios.$get('/queryListings')
    if (store.state.user) {
      const user = await $axios.$get('/sendUser')
      return { listings, user }
    }
    const user = null
    return { listings, user }
  },
  watch: {
    '$store.state.filters': async function () {
      try {
        const listings = await this.$axios.$get(
          `/filterListings/${this.$store.state.filters}`
        )
        this.query = listings
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#filters {
  -webkit-appearance: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}
</style>
