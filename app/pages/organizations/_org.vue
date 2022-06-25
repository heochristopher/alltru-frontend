<template>
  <div class="">
    <user :user="org"/>
    <alert/>
    <div id="listings" class="">
        <listing
          v-for="listing in listings"
          :key="listing"
          :listing="listing"
          :isSaved="(!user) ? null : user.savedListings.includes(listing._id)"
        />
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({$axios, params, store}) {
        const id = params.org
        try {
            const org = await $axios.$get(`/sendOther/${id}`)
            const listings = await $axios.$get(`/orgListings/${id}`)
            if(store.state.user) {
                const user = await $axios.$get('/sendUser')
                return {user, org, listings}
            }
            return {org, listings}
        } catch (error) {
            console.log(error)
        }
  },
}
</script>

<style>

</style>