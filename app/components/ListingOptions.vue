<template>
  <div class="w-1/5 h-full flex justify-center items-center my-auto sm:w-1/3">
    <div
      id="options"
      v-if="user.role === 'Student'"
      class="w-full h-full flex flex-col justify-center items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
    >
      <button
        class="w-16 h-8 rounded-md bg-zinc-200 text-zinc-600 ease-in duration-100 hover:bg-zinc-300 sm:w-20"
        @click="save"
        v-if="!isSaved"
      >
        Save
      </button>
      <button
        class="w-16 h-8 rounded-md bg-zinc-200 text-zinc-600 ease-in duration-100 hover:bg-zinc-300 sm:w-20"
        v-if="isSaved"
      >
        Saved
      </button>
      <button
        class="w-16 h-8 rounded-md bg-zinc-200 text-zinc-600 ease-in duration-100 hover:bg-zinc-300 sm:w-20"
      >
        Apply
      </button>
    </div>
    <div
      id="options"
      v-if="!user"
      class="w-full h-full flex flex-col justify-center items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
    >
      <nuxt-link to="/login">
        <button
          class="w-16 h-8 rounded-md bg-zinc-200 text-zinc-600 ease-in duration-100 hover:bg-zinc-300 sm:w-20"
        >
          Save
        </button>
      </nuxt-link>
      <nuxt-link to="/login">
        <button
          class="w-16 h-8 rounded-md bg-zinc-200 text-zinc-600 ease-in duration-100 hover:bg-zinc-300 sm:w-20"
        >
          Apply
        </button>
      </nuxt-link>
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
        async save() {
            try {
                const res = await this.$axios.$post(`/saveListing/${this.id}`)
                this.$store.dispatch('GET_ALERT', {
                    data: res,
                    status: 200
                })
            } catch (error) {
                this.$store.dispatch('GET_ALERT', error)
            }
        }
    },
  },
}
</script>

<style></style>
