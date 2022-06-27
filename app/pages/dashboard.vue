<template>
  <div id="">
    <student-dash v-if="user.role === 'Student'"
    :user="user"
    :saved="saved"
    :applied="applied"
    />
    <org-dash v-if="user.role === 'Organization'"
    :user="user"
    :listings="listings"
    />
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    async asyncData({$axios}) {
        const user = await $axios.$get('/sendUser')
        if(user.role === 'Student') {
            const saved = await $axios.$get('/sendSaved')
            console.log(saved)
            const applied = await $axios.$get('/sendApplied')
            console.log(applied)
            return {user, saved, applied}
        } else {
            const listings = await $axios.$get('/sendListings')
            return {user, listings}
        }
    }
}
</script>

<style>

</style>