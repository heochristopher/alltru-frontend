<template>
  <div
    id="signup"
    class="h-auto w-96 p-4 relative flex justify-center items-center"
  >
    <!-- for students -->
    <form class="space-x-2 space-y-4">
      <h1 class="text-center text-2xl p-2">Organizations</h1>
      <div id="org" class="flex flex-col justify-center items-center">
        <!-- <label for="org">Organization</label> -->
        <form-input
          id="org"
          type="org"
          name="org"
          v-model="org"
          placeholder="Organization"
          required
        />
      </div>
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
              type="first-name"
              name="first-name"
              v-model="firstName"
              placeholder="First Name"
              required
            />
          </div>
          <div id="last-name" class="flex justify-start items-center w-40 ml-2">
            <!-- <label for="last-name">Last Name</label> -->
            <form-input
              id="name"
              type="last-name"
              name="last-name"
              v-model="lastName"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
      </div>
      <div id="email" class="flex flex-col justify-center items-center">
        <!-- <label for="email">Email</label> -->
        <form-input
          id="email"
          type="email"
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
      </div>
    </form>
  </div>
</template>

<script>
import FormBtn from './FormBtn.vue'
import FormInput from './FormInput.vue'

export default {
  components: { FormInput, FormBtn },
  name: 'OrganizationSignup',
}
</script>
