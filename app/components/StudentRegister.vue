<template>
  <div id="signup" class="h-auto w-96 p-4 relative flex justify-center items-center">
    <form @submit.prevent="register" method="POST" class="space-y-4">
      <h1 class="text-center text-2xl font-medium">Students</h1>
      <div id="name" class="flex flex-col justify-center items-center mt-2">
        <div id="name-field" class="flex items-center justify-evenly">
          <div id="first-name" class="flex justify-start items-center w-1/2 mr-1">
            <login-input type="text" name="first-name" v-model="firstName" required> First Name </login-input>
          </div>
          <div id="last-name" class="flex justify-start items-center w-1/2 ml-2">
            <login-input type="text" name="last-name" v-model="lastName" required> Last Name </login-input>
          </div>
        </div>
      </div>
      <div id="age" class="w-full flex flex-col justify-center items-center mt-2">
        <div id="date-field" class="w-full flex items-center justify-evenly">
          <div id="month" class="flex justify-start items-center w-1/3 mr-1">
            <select class="w-full border border-zinc-200 text-zinc-500 text-sm rounded-md focus:ring-violet-500 focus:border-violet-500 block py-2.5 px-2 mt-2.5" type="number" name="floating_month" v-model="month" required>
              <option disabled selected value="">Birth Month</option>
              <option v-for="month in monthRange" :key="month" :value="month">{{ month }}</option>
            </select>
          </div>
          <div id="day" class="flex justify-start w-1/3 mx-2">
            <select class="w-full border border-zinc-200 text-zinc-500 text-sm rounded-md focus:ring-violet-500 focus:border-violet-500 block py-2.5 px-2 mt-2.5" type="number" name="dob-day" v-model="day" required>
              <option disabled selected value="">Birth Day</option>
              <option v-for="index in 31" :key="index" :value="index">{{ index }}</option>
            </select>
          </div>
          <div id="year" class="flex justify-start w-1/3 ml-1">
            <select class="w-full border border-zinc-200 text-zinc-500 text-sm rounded-md focus:ring-violet-500 focus:border-violet-500 block py-2.5 px-2 mt-2.5" type="number" name="dob-year" v-model="year" required>
              <option disabled selected value="">Birth Year</option>
              <option v-for="year in yearRange" :key="year" :value="year">{{ year }}</option>
            </select>
          </div>
        </div>
      </div>
      <div id="school" class="flex flex-col justify-center items-center mt-2">
        <login-input type="text" name="school" v-model="school" required> School/Institution </login-input>
      </div>
      <div id="email" class="flex flex-col justify-center items-center mt-2">
        <login-input type="text" name="email" v-model="email" required> Email </login-input>
      </div>
      <div id="pass" class="flex flex-col justify-center items-center mt-2">
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
  name: 'StudentSignup',
  data() {
    return {
      firstName: null,
      lastName: null,
      month: '',
      day: '',
      year: '',
      school: null,
      email: null,
      password: null,
      yearRange: [...Array(2020 - 1990 + 1).keys()].map((x) => x + 1990).reverse(),
      monthRange: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
  },
  methods: {
    async register() {
      console.log(this.month, this.day, this.year)
      const birthday = Date.parse(`${this.day} ${this.month} ${this.year}`)
      try {
        const res = await this.$axios.$post('/studentRegister', {
          affiliation: this.school,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          birthday: birthday,
        })
        this.$router.push('/dashboard')
        this.$nuxt.refresh()
        this.$store.dispatch('GET_ALERT', res)
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
  },
}
</script>
