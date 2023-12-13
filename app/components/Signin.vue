<template>
  <div id="signin" class="h-auto w-96 p-4 relative flex flex-col justify-center items-center">
    <form @submit.prevent="login" method="POST" class="space-y-4">
      <h1 class="text-center text-2xl font-medium">Welcome back,</h1>
      <div id="email" class="w-80 flex flex-col justify-center items-center mt-2">
        <!-- <label for="email">Email</label> -->
        <login-input type="text" name="email" v-model="email" required> Email </login-input>
      </div>
      <div id="pass" class="w-80 flex flex-col justify-center items-center mt-2">
        <!-- <label for="password">Password</label> -->
        <login-input type="password" name="password" v-model="password" required> Password </login-input>
      </div>
      <div id="btn" class="mt-6 flex flex-col justify-center items-center space-y-2">
        <form-btn>Login</form-btn>
        <NuxtLink to="/recover"><p class="px-1 py-2 text-md text-zinc-500 ease-in duration-100 hover:text-zinc-400">Forgot password?</p></NuxtLink>
        <div class="flex justify-center items-center">
          <p class="px-1 py-2 text-sm text-zinc-400">No account?</p>
          <NuxtLink to="/register"><p class="px-1 py-2 text-sm text-zinc-500 ease-in duration-100 hover:text-zinc-400">Register</p></NuxtLink>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  data() {
    return {
      email: null,
      password: null,
      error: null,
    }
  },
  methods: {
    login: async function () {
      try {
        await this.$axios.$post('/login', {
          email: this.email,
          password: this.password,
        })
        await this.$store.dispatch('GET_USER')
        this.$router.push('dashboard')
      } catch (error) {
        this.password = null
        this.$store.dispatch('GET_ALERT', error)
      }
    },
  },
}
</script>
