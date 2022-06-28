<template>
  <div class="">
    <navbar/>
    <div id="" class="mt-24">
      <user :user="org"/>
      <contact-info :github="org.github" :mail="org.email" :linkedin="org.linkedIn"/>
      <biography :bio="org.biography"/>
      <div id="listings" class="mx-4">
        <h2 class="text-lg font-semibold">{{`${org.affiliation}'s posted listings`}}</h2>
          <listing
            v-for="listing in listings"
            :key="listing.position"
            :listing="listing"
            :isSaved="(!user) ? null : user.savedListings.includes(listing._id)"
          />
      </div>
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