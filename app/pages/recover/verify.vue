<template>
  <div class="w-full h-screen">
    <div class="absolute w-full h-20 flex justify-center items-center">
      <NuxtLink to="/listings"><h1 class="text-3xl font-medium truncate">Alltru</h1></NuxtLink>
    </div>
    <div class="w-full h-screen flex justify-center items-center">
      <div id="reset-password" class="h-auto w-96 p-4 relative flex flex-col justify-center items-center space-y-6">
        <form @submit.prevent="verifyCode" method="POST" class="flex flex-col justify-center items-center space-y-4">
          <h1 class="text-center text-2xl font-medium">Verify your code</h1>
          <div id="email" class="w-80 flex flex-col justify-center items-center mt-2">
            <input class="block py-2.5 px-3 mt-2.5 w-1/2 text-md text-center text-zinc-900 bg-transparent rounded-md border border-solid border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-violet-500" id="biography" v-model="code" name="code" type="number" required placeholder="6-digit code" />
          </div>
          <div id="btn" class="mt-6 flex flex-col justify-center items-center space-y-2 w-1/2">
            <form-btn>Verify</form-btn>
          </div>
        </form>
        <div id="info" class="px-1 py-4 border-t border-solid border-zinc-200">
          <p class="text-sm text-center text-zinc-500">You'll have received a 6-digit numerical code in your email — please enter it above. Didn't receive a code? <NuxtLink to="/recover" class="ease-in duration-100 hover:opacity-80">Click here to receive a new code.</NuxtLink></p>
        </div>
      </div>
    </div>
    <alert />
  </div>
</template>

<script>
export default {
  name: 'VerifyRecoveryCode',
  data() {
    return {
      code: null,
      error: null,
    }
  },
  methods: {
    verifyCode: async function () {
      try {
        const email = document.cookie.split('=')[1]
        if (!email) {
          return this.$store.dispatch('GET_ALERT', {
            data: 'Your code has expired — please request a new code.',
            status: 400,
          })
        }
        if (this.code.length !== 6) {
          return this.$store.dispatch('GET_ALERT', {
            data: 'Verification code must be 6 digits long.',
            status: 400,
          })
        }
        const res = await this.$axios.patch('/verifyResetCode', {
          email: email,
          code: this.code,
        })
        this.$store.dispatch('GET_ALERT', res)
        this.$router.push('/recover/password')
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
  },
}
</script>
