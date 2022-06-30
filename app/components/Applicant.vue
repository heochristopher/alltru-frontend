<template>
  <div id="" class="">
    <nuxt-link :to="`/students/${user._id}`">
        <div class="mx-4 flex flex-row space-x-2">
            <img :src="user.avatar" class="w-14 h-14 aspect-square overflow-hidden rounded-full" alt="">
            <div class="flex flex-col justify-center">
                <h2 class="text-2xl font-semibold">{{`${user.firstName} ${user.lastName}, ${age}`}}</h2>
                <h4 class="text-gray-500">{{user.affiliation}}</h4>
            </div>
        </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
    props: {
        user: Object
    },
    computed: {
        age() {
            const today = new Date()
            const birthday = new Date(this.user.birthday)
            const age = today.getFullYear() - birthday.getFullYear()
            const m = today.getMonth() - birthday.getMonth()
            if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--
            }
            return age
        }
    }
}
</script>

<style>

</style>