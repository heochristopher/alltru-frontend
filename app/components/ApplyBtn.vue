<template>
<div class="w-1/5 h-full flex flex-col justify-center items-center space-y-4 my-auto sm:w-1/3 sm:flex-row sm:space-y-0 sm:space-x-4">
    <div id="options" v-if="!user">
        <nuxt-link to="/login">
            <button
            class="w-16 h-8 rounded-md bg-zinc-200 text-zinc-600 ease-in duration-100 hover:bg-zinc-300 sm:w-20"
            >
            Apply
            </button>
        </nuxt-link>
    </div>
    <div id="options" v-else-if="user.role === 'Student'">
        <button
          class="w-16 h-8 rounded-md bg-zinc-200 text-zinc-600 ease-in duration-100 hover:bg-zinc-300 sm:w-20"
        >
          Apply
        </button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            user: this.$store.state.user
        }
    },
    props: {
        id: String,
        isSaved: Boolean
    },
    methods: {
        // async save() {
        //     try {
        //         const res = await this.$axios.$post(`/saveListing/${this.id}`)
        //         this.$store.dispatch('GET_ALERT', {
        //             data: res,
        //             status: 200
        //         })
        //     } catch (error) {
        //         this.$store.dispatch('GET_ALERT', error)
        //     }
        // }
    },
}
</script>

<style scoped>
#btn {
  background: linear-gradient(90.73deg, rgb(253 164 175) 4%, rgb(168 85 247) 97.46%);
}
</style>
