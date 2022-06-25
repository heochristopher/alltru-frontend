<template>
  <div>
    <h1>{{listing.org.affiliation}}</h1>
    <h1>{{listing.position}}</h1>
  </div>
</template>

<script>
export default {
    async asyncData({$axios, params}) {
        const id = params.listing
        const listing = await $axios.$get(`/findListing/${id}`)
        return {listing}
  },
}
</script>

<style>

</style>