<template>
  <div
    id="signin"
    class="h-auto w-96 p-4 relative flex flex-col justify-center items-center"
  >
    <form @submit.prevent="login" method="POST" class="space-x-2 space-y-5">
      <alert />
      <h1 class="text-center text-2xl">Welcome back,</h1>
      <div id="email" class="w-80 flex flex-col justify-center items-center">
        <!-- <label for="email">Email</label> -->
        <form-input
          id="email"
          type="text"
          name="email"
          v-model="email"
          placeholder="Email"
          required
        />
      </div>
      <div id="pass" class="w-80 flex flex-col justify-center items-center">
        <!-- <label for="password">Password</label> -->
        <form-input
          id="password"
          type="password"
          name="password"
          v-model="password"
          placeholder="Password"
          required
        />
      </div>
      <div id="btn" class="flex flex-col justify-center items-center">
        <form-btn>Login</form-btn>
        <div class="flex justify-center items-center">
          <p class="px-1 py-4 text-sm text-zinc-500">No Account?</p>
          <NuxtLink to="/register"
            ><p
              class="px-1 py-4 text-sm text-zinc-700 ease-in duration-100 hover:text-zinc-500"
            >
              Register
            </p></NuxtLink
          >
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
        this.$router.push('studentdash')
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
