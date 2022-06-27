<template>
  <div class="w-full h-full flex justify-center items-center p-4 sm:ml-8">
    <div id="options" v-if="user === null">
      <nuxt-link to="/login">
        <button class="">
          <path src="@/assets/icons/bookmark.svg" alt="bookmark icon"></path>
        </button>
      </nuxt-link>
    </div>
    <div id="options" v-else-if="user.role === 'Student'">
      <button class="" @click="save">
        <!-- <img src="@/assets/icons/bookmark.svg" alt="bookmark icon" :class="{saved: this.saved}"> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          :class="{ saved: this.saved }"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.state.user,
      saved: this.isSaved,
    }
  },
  props: {
    id: String,
    isSaved: Boolean,
  },
  methods: {
    async save() {
      try {
        if (this.saved) {
          const res = await this.$axios.$request({
            url: `/unsaveListing/${this.id}`,
            method: 'delete',
          })
          this.$store.dispatch('GET_ALERT', {
            data: res,
            status: 200,
          })
          this.saved = false
        } else {
          const res = await this.$axios.$post(`/saveListing/${this.id}`)
          this.$store.dispatch('GET_ALERT', {
            data: res,
            status: 200,
          })
          this.saved = true
        }
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
  },
  computed: {
    message() {
      return this.saved ? 'Saved' : 'Save'
    },
  },
}
</script>

<style scoped>
.saved {
  fill: #000;
}
</style>
