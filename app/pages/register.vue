<template>
  <div
    id="register"
    class="w-full h-screen flex flex-col justify-center items-center relative"
  >
    <div id="content" class="flex justify-center items-start">
      <div id="student" class="flex justify-center items-center">
        <student-register v-show="student"> </student-register>
        <div
          v-show="student"
          id="screen"
          class="w-96 h-96 p-6 ml-8 flex flex-col justify-center items-center space-y-5"
        >
          <h2 class="text-center text-2xl">Not a Student?</h2>
          <p class="text-center text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            aliquid tempore mollitia.
          </p>
          <form-btn @e="swapStudent">Sign Up as Organization</form-btn>
        </div>
      </div>
      <div id="org" class="flex justify-center items-center">
        <div
          v-show="org"
          id="screen"
          class="w-96 h-96 p-6 mr-8 flex flex-col justify-center items-center space-y-5"
        >
          <h2 class="text-center text-2xl">Not an Organization?</h2>
          <p class="text-center text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            inventore tempore deleniti.
          </p>
          <form-btn @e="swapOrg">Sign Up as Student</form-btn>
        </div>
        <org-register v-show="org">
          <p @click="swapOrg" class="p-4 text-sm text-zinc-500 cursor-pointer">
            Not an Organization?
          </p>
        </org-register>
      </div>
    </div>
  </div>
</template>

<script>
import OrgRegister from '../components/OrgRegister.vue'
import StudentRegister from '../components/StudentRegister.vue'
export default {
  components: { StudentRegister, OrgRegister },
  name: 'register',
  data() {
    return {
      student: true,
      org: false,
    }
  },
  created() {
    ;(this.student = true), (this.org = false)
  },
  methods: {
    swapStudent() {
      this.student = false
      this.org = true
    },
    swapOrg() {
      ;(this.org = false), (this.student = true)
    },
  },
}
</script>
