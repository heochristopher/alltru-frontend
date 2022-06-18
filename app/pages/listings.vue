<template>
  <div class="home">
    <navbar/>
    <h1>{{user.firstName}}</h1>
    <div class="content">
      <div class="filters">
        <search/>
      </div>
      <div class="listings">
        <listing v-for="listing in listings" :key="listing" :listing="listing" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: 'Listings',
   data() {
    return {
      user: this.$store.state.user
    }
   },
   async asyncData({$axios}) {
    const listings = await $axios.$get('/queryListings')
    return {listings}
   }
}

</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.content {
  display: flex;
  justify-content: center;
  align-items: start;
}

.filters {
  width: 30vw;
  min-height: 100vh;
  margin: 2rem 1rem;
  // background-color: skyblue;
}

.listings {
  width: 57vw;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  // background-color: lightcoral;
}
</style>