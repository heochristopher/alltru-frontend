<template>
  <div id="signup" class="h-auto w-96 p-4 relative flex justify-center items-center">
    <form @submit.prevent="register" method="POST" class="space-y-4">
      <h1 class="text-center text-2xl font-medium">Recruiters</h1>
      <div id="org" class="flex flex-col justify-center items-center mt-2">
        <login-input type="text" name="org" v-model="org" required> Organization </login-input>
      </div>
      <div id="name" class="flex flex-col justify-center items-center mt-2">
        <div id="name-field" class="flex items-center justify-evenly">
          <div id="first-name" class="flex justify-start items-center w-1/2 mr-1">
            <login-input type="text" name="first-name" v-model="firstName" required> First Name </login-input>
          </div>
          <div id="last-name" class="flex justify-start items-center w-1/2 ml-2">
            <!-- <label for="last-name">Last Name</label> -->
            <login-input type="text" name="last-name" v-model="lastName" required> Last Name </login-input>
          </div>
        </div>
      </div>
      <div id="email" class="flex flex-col justify-center items-center mt-2">
        <!-- <label for="email">Email</label> -->
        <login-input type="text" name="email" v-model="email" required> Email </login-input>
      </div>
      <div id="pass" class="flex flex-col justify-center items-center mt-2">
        <!-- <label for="password">Password</label> -->
        <login-input type="password" name="password" v-model="password" required> Password </login-input>
      </div>
      <div id="btn" class="flex flex-col justify-center items-center mt-6">
        <form-btn type="submit">Sign Up</form-btn>
        <slot></slot>
        <div class="flex justify-center items-center">
          <p class="px-1 py-4 text-sm text-zinc-400">Have an Account?</p>
          <NuxtLink to="/login"><p class="px-1 py-4 text-sm text-zinc-500 ease-in duration-100 hover:text-zinc-400">Login</p></NuxtLink>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'OrganizationSignup',
  data() {
    return {
      org: null,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
    }
  },
  methods: {
    async register(arg) {
      try {
        const res = await this.$axios.$post('/orgRegister', {
          affiliation: this.org,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        })
        this.$store.dispatch('GET_USER')
        this.$router.push('/dashboard')
        this.$store.dispatch('GET_ALERT', res)
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
  },
}
</script>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: #151515;
  box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset;
  -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>