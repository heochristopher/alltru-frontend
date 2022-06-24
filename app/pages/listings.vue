<template>
  <div id="home">
    <navbar />
    <div id="content" class="flex flex-col justify-center items-center">
      <div id="filters" class="w-4/5 flex justify-center items-center my-6">
        <search />
      </div>
      <div
        v-if="query === null"
        class="w-11/12 flex flex-col justify-center items-center"
      >
        <listing
          v-for="listing in listings"
          :key="listing"
          :listing="listing"
        />
      </div>
      <div v-else class="w-11/12 flex flex-col justify-center items-center">
        <listing v-for="listing in query" :key="listing" :listing="listing" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Listings',
  data() {
    return {
      user: this.$store.state.user,
      query: null,
    }
  },
  async asyncData({ $axios }) {
    const listings = await $axios.$get('/queryListings')
    return { listings }
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

<style lang="scss" scoped></style>
