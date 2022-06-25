<template>
<div class="w-1/5 h-full flex flex-col justify-center items-center space-y-4 my-auto sm:w-1/3 sm:flex-row sm:space-y-0 sm:space-x-4">
    <div id="options" v-if="user === null">
        <nuxt-link to="/login">
            <button
            class="w-16 h-8 rounded-md bg-zinc-200 text-zinc-600 ease-in duration-100 hover:bg-zinc-300 sm:w-20"
            >
            Save
            </button>
        </nuxt-link>
    </div>
    <div id="options" v-else-if="user.role === 'Student'">
        <button
          class="w-16 h-8 rounded-md bg-zinc-200 text-zinc-600 ease-in duration-100 hover:bg-zinc-300 sm:w-20"
          @click="save"
        >
          {{message}}
        </button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            user: this.$store.state.user,
            saved: this.isSaved
        }
    },
    props: {
        id: String,
        isSaved: Boolean
    },
    methods: {
        async save() {
            try {
                if(this.saved) {
                    const res = await this.$axios.$request({url: `/unsaveListing/${this.id}`, method: 'delete'})
                    this.$store.dispatch('GET_ALERT', {
                        data: res,
                        status: 200
                    })
                    this.saved = false
                } else {
                    const res = await this.$axios.$post(`/saveListing/${this.id}`)
                    this.$store.dispatch('GET_ALERT', {
                        data: res,
                        status: 200
                    })
                    this.saved = true
                }
            } catch (error) {
                this.$store.dispatch('GET_ALERT', error)
            }
        }
    },
    computed: {
        message() {
            return this.saved ? "Saved" : "Save"
        }
    }
}
</script>

<style>

</style>