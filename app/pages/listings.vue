<template>
  <div id="home">
    <navbar />
    <div
      id="content"
      class="flex flex-col justify-start items-center space-y-8 mt-6"
    >
      <div id="filters" class="w-4/5 flex justify-center items-center">
        <search />
      </div>
      <div class="w-11/12 flex flex-col justify-center items-center">
        <listing
          v-for="listing in listings"
          :key="listing"
          :listing="listing"
        />
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
    }
  },
  async asyncData({ $axios }) {
    const listings = await $axios.$get('/queryListings')
    return { listings }
  },
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
