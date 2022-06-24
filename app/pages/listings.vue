<template>
  <div class="home">
    <navbar/>
    <div class="content">
      <search/>
      <div v-if="query === null" class="flex flex-col justify-center items-center m-4">
        <listing v-for="listing in listings" :key="listing" :listing="listing" />
      </div>
      <div v-else class="flex flex-col justify-center items-center m-4">
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
      query: null
    }
  },
  async asyncData({ $axios }) {
    const listings = await $axios.$get('/queryListings')
    return {listings}
   },
   watch: {
    '$store.state.filters': async function() {
      try {
        const listings = await this.$axios.$get(`/filterListings/${this.$store.state.filters}`)
        this.query = listings
      } catch (error) {
        console.log(error)
      }
    }
   }
}
</script>

<style lang="scss" scoped>
// @import "../assets/scss/variables.scss";
// .content {
//   display: flex;
//   justify-content: center;
//   align-items: start;
// }

// .filters {
//   width: 30vw;
//   min-height: 100vh;
//   margin: 2rem 1rem;
//   // background-color: skyblue;
// }

// .listings {
//   width: 57vw;
//   margin: 1rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   align-items: center;
//   // background-color: lightcoral;
// }
</style>
