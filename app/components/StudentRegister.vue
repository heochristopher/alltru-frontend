<template>
  <div
    id="signup"
    class="h-auto w-96 p-4 relative flex justify-center items-center"
  >
    <form @submit.prevent="register" method="POST" class="space-y-4">
      <h1 class="text-center text-2xl font-medium">Students</h1>
      <div id="name" class="flex flex-col justify-center items-center mt-2">
        <div id="name-field" class="flex items-center justify-between">
          <div
            id="first-name"
            class="flex justify-start items-center w-40 mr-1"
          >            
            <form-input
              type="text"
              name="first-name"
              v-model="firstName"
              required
            >
              First Name
            </form-input>
          </div>
          <div id="last-name" class="flex justify-start items-center w-40 ml-2">
            <form-input
              type="text"
              name="last-name"
              v-model="lastName"
              required
            >
              Last Name
            </form-input>
          </div>
        </div>
      </div>
      <div id="age" class="flex flex-col justify-center items-center mt-2">
        <div id="date-field" class="flex items-end justify-between">
          <div id="month" class="flex justify-start items-center w-24 mr-1">
            <div class="">
              <form-input
              type="number"
              name="dob-month"
              v-model="month"
              required
              >
                Birth Month
              </form-input>
            </div>
          </div>
          <div id="day" class="flex justify-start w-24 mx-2">
            <form-input
              type="number"
              name="dob-day"
              v-model="day"
              required
              >
                Birth Day
              </form-input>
          </div>
          <div id="year" class="flex justify-start w-28 ml-1">
            <form-input
              type="number"
              name="dob-year"
              v-model="year"
              required
              >
                Birth Year
              </form-input>
          </div>
        </div>
      </div>
      <div id="school" class="flex flex-col justify-center items-center mt-2">
        <form-input
          type="text"
          name="school"
          v-model="school"
          required
        >
          School/Institution
        </form-input>
      </div>
      <div id="email" class="flex flex-col justify-center items-center mt-2">
        <form-input
          type="text"
          name="email"
          v-model="email"
          required
        >
          Email
        </form-input>
      </div>
      <div id="pass" class="flex flex-col justify-center items-center mt-2">
        <form-input
          type="password"
          name="password"
          v-model="password"
          required
        >
          Password
        </form-input>
      </div>
      <div id="btn" class="flex flex-col justify-center items-center mt-6">
        <form-btn>Sign Up</form-btn>
        <slot></slot>
        <div class="flex justify-center items-center">
          <p class="px-1 py-4 text-sm text-zinc-400">Have an Account?</p>
          <NuxtLink to="/login"
            ><p
              class="px-1 py-4 text-sm text-zinc-500 ease-in duration-100 hover:text-zinc-400"
            >
              Login
            </p></NuxtLink
          >
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
      month: null,
      day: null,
      year: null,
      school: null,
      email: null,
      password: null
    }
  },
  methods: {
    async register() {
      const birthday = new Date(`${this.year}-${this.month}-${this.day}`)
      try {
        await this.$axios.$post('/studentRegister', {
          affiliation: this.school,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          birthday: birthday,
        })
        this.$router.push('/dashboard')

      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
