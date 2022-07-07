<template>
  <div id="" class="flex justify-between items-center w-full">
    <nuxt-link :to="`/students/${user._id}`" class="">
        <div class="mx-4 flex flex-row space-x-2">
            <img :src="user.avatar" class="w-14 h-14 aspect-square overflow-hidden rounded-full" alt="">
            <div class="flex flex-col justify-center">
                <h2 class="text-2xl font-semibold">{{`${user.firstName} ${user.lastName}, ${age}`}}</h2>
                <h4 class="text-zinc-500">{{user.affiliation}}</h4>
            </div>
        </div>
    </nuxt-link>
    <div id="actions" class="flex justify-center items-center space-x-10">
        <button id="" class="text-zinc-500 font-medium ">View Profile</button>
        <button id="email" @click="email" class=" flex justify-center items-center">
            <img src="@/assets/icons/mail.svg" alt="" class="w-auto h-5 mr-1">
            <p class="text-base text-zinc-500 font-medium">Email</p>
        </button>
        <!-- <button id="accept" @click="accept" class="text-green-500 font-medium px-2">Accept</button> -->
        <!-- <button id="reject" @click="reject" class="">Close</button> -->
    </div>
  </div>
</template>

<script>
export default {
    props: {
        user: Object
    },
    methods: {
        async reject() {

        }
    },
    computed: {
        age() {
            const today = new Date()
            const birthday = new Date(this.user.birthday)
            const age = today.getFullYear() - birthday.getFullYear()
            const m = today.getMonth() - birthday.getMonth()
            if(m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
                age--
            }
            return age
        }
    }
}
</script>

<style>

</style>