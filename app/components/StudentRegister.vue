<template>
  <div
    id="signup"
    class="h-auto w-96 p-4 relative flex justify-center items-center"
  >
    <form @submit.prevent="register" method="POST" class="space-y-4">
      <h1 class="text-center text-2xl font-medium">Students</h1>
      <div id="name" class="flex flex-col justify-center items-center mt-2">
        <div id="name-field" class="flex items-center justify-evenly">
          <div
            id="first-name"
            class="flex justify-start items-center w-1/2 mr-1"
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
          <div id="last-name" class="flex justify-start items-center w-1/2 ml-2">
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
      <div id="age" class="w-full flex flex-col justify-center items-center mt-2">
        <div id="date-field" class="w-full flex items-center justify-evenly">
          <div id="month" class="flex justify-start items-center w-1/3 mr-1">
            <form-select
              type="number"
              name="dob-month"
              v-model="month"
              required
              >
                <option selected="">Month</option>
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
              </form-select>
          </div>
          <div id="day" class="flex justify-start w-1/3 mx-2">
            <!-- <form-input
              type="number"
              name="dob-day"
              v-model="day"
              required
              >
                Day
              </form-input> -->
            <form-select
              type="number"
              name="dob-day"
              v-model="day"
              required
              >
                <option selected="">Day</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </form-select>
          </div>
          <div id="year" class="flex justify-start w-1/3 ml-1">
            <form-select
              type="number"
              name="dob-year"
              v-model="year"
              required
              >
                <option selected="">Year</option>
                <option>2008</option>
                <option>2007</option>
                <option>2006</option>
                <option>2005</option>
                <option>2004</option>
                <option>2003</option>
                <option>2002</option>
                <option>2001</option>
                <option>2000</option>
              </form-select>
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
