<template>
  <div class="w-full h-screen">
    <div class="absolute w-full h-20 flex justify-center items-center">
      <NuxtLink to="/listings"><h1 class="text-3xl font-medium truncate">Alltru</h1></NuxtLink>
    </div>
    <div class="w-full h-screen flex justify-center items-center">
      <div id="reset-password" class="h-auto w-96 p-4 relative flex flex-col justify-center items-center space-y-6">
        <form @submit.prevent="setPassword" method="POST" class="space-y-4">
          <h1 class="text-center text-2xl font-medium">Enter a new password:</h1>
          <div id="email" class="w-80 flex flex-col justify-center items-center mt-2">
            <form-input type="password" name="password1" v-model="password1" placeholder="Password" />
            <form-input type="password" name="password2" v-model="password2" placeholder="Confirm password" />
          </div>
          <div id="btn" class="mt-6 flex flex-col justify-center items-center space-y-2">
            <form-btn>Set new password</form-btn>
          </div>
        </form>
      </div>
    </div>
    <alert />
  </div>
</template>

<script>
export default {
  name: 'SetPassword',
  data() {
    return {
      password1: null,
      password2: null,
      error: null,
    }
  },
  methods: {
    setPassword: async function () {
      try {
        if (this.password1 !== this.password2) {
          return this.$store.dispatch('GET_ALERT', {
            data: 'Your passwords do not match.',
            status: 400,
          })
        }
        const email = document.cookie.split('=')[1]
        if (!email) {
          return this.$store.dispatch('GET_ALERT', {
            data: 'Your code has expired — please request a new code.',
            status: 400,
          })
        }
        const res = await this.$axios.patch('/resetPassword', {
          email: email,
          password1: this.password1,
          password2: this.password2,
        })
        this.$router.push('/login')
        this.$store.dispatch('GET_ALERT', res)
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
  },
}
</script>
