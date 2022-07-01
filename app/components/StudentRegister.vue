<template>
  <div
    id="signup"
    class="h-auto w-96 p-4 relative flex justify-center items-center"
  >
    <!-- for students -->
    <form @submit.prevent="register" method="POST" class="space-x-2 space-y-4">
      <h1 class="text-center text-2xl p-2">Students</h1>
      <div id="name" class="flex flex-col justify-center items-center">
        <!-- <label for="name">Name</label> -->
        <div id="name-field" class="flex items-center justify-between">
          <div
            id="first-name"
            class="flex justify-start items-center w-40 mr-1"
          >
            <!-- <label v-show="firstName" for="first-name">First Name</label> -->
            <form-input
              id="name"
              type="text"
              name="first-name"
              v-model="firstName"
              placeholder="First name"
              required
            />
          </div>
          <div id="last-name" class="flex justify-start items-center w-40 ml-2">
            <!-- <label for="last-name">Last Name</label> -->
            <form-input
              id="name"
              type="text"
              name="last-name"
              v-model="lastName"
              placeholder="Last name"
              required
            />
          </div>
        </div>
      </div>
      <div id="age" class="flex flex-col justify-center items-center">
        <!-- <label for="age">Date of Birth</label> -->
        <div id="date-field" class="flex items-end justify-between">
          <div id="month" class="flex justify-start items-center w-24 mr-1">
            <div class="">
              <!-- <label class="text-sm" for="dob-month">Birthday</label> -->
              <form-input
                id="age"
                type="number"
                name="dob-month"
                v-model="month"
                placeholder="Month"
                required
              />
            </div>
          </div>
          <div id="day" class="flex justify-start w-24 mx-2">
            <form-input
              id="age"
              type="number"
              name="dob-day"
              v-model="day"
              placeholder="Day"
              required
            />
          </div>
          <div id="year" class="flex justify-start w-28 ml-1">
            <form-input
              id="age"
              type="number"
              name="dob-year"
              v-model="year"
              placeholder="Year"
              required
            />
          </div>
        </div>
      </div>
      <div id="school" class="flex flex-col justify-center items-center">
        <!-- <label for="school">School</label> -->
        <form-input
          id="school"
          type="text"
          name="school"
          v-model="school"
          placeholder="School"
          required
        />
      </div>
      <div id="email" class="flex flex-col justify-center items-center">
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
      <div id="pass" class="flex flex-col justify-center items-center">
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
        <form-btn>Sign Up</form-btn>
        <slot></slot>
        <div class="flex justify-center items-center">
          <p class="px-1 py-4 text-sm text-zinc-500">Have an Account?</p>
          <NuxtLink to="/login"
            ><p
              class="px-1 py-4 text-sm text-zinc-700 ease-in duration-100 hover:text-zinc-500"
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
        this.$router.push('studentdash')

      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
