<template>
  <div class="w-full h-screen">
    <div class="absolute w-full h-20 flex justify-center items-center">
      <NuxtLink to="/listings"><h1 class="text-3xl font-medium truncate">Alltru</h1></NuxtLink>
    </div>
    <div class="w-full h-screen flex justify-center items-center">
      <div id="reset-password" class="h-auto w-96 p-4 relative flex flex-col justify-center items-center space-y-6">
        <form @submit.prevent="sendCode" method="POST" class="space-y-4">
          <h1 class="text-center text-2xl font-medium">Forgot your password?</h1>
          <div id="email" class="w-80 flex flex-col justify-center items-center mt-2">
            <login-input type="text" name="email" v-model="email" required> Email </login-input>
          </div>
          <div id="btn" class="mt-6 flex flex-col justify-center items-center space-y-2">
            <form-btn>Send password reset code</form-btn>
          </div>
        </form>
        <div id="info" class="px-1 py-4 border-t border-solid border-zinc-200">
          <p class="text-sm text-center text-zinc-500">You'll receive a password reset email — it may take several minutes. Make sure to check your junk mail folder.</p>
        </div>
      </div>
    </div>
    <alert />
  </div>
</template>

<script>
export default {
  name: 'RecoverAccount',
  data() {
    return {
      email: null,
      error: null,
    }
  },
  methods: {
    sendCode: async function () {
      try {
        const res = await this.$axios.patch('/requestNewPassword', {
          email: this.email,
        })
        //expires in 20 minutes
        const cookieExpires = new Date(Date.now() + 20 * 60 * 1000)
        document.cookie = `email=${this.email}; SameSite=strict; Secure; expires=${cookieExpires}`
        this.$router.push('/recover/verify')
        this.$store.dispatch('GET_ALERT', res)
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
  },
}
</script>
