<template>
  <div id="register" class="w-full h-screen">
    <div class="absolute w-full h-20 flex justify-center items-center">
      <NuxtLink to="/listings"><h1 class="text-3xl font-medium truncate">Alltru</h1></NuxtLink>
    </div>
    <div id="content" class="w-full h-screen flex justify-center items-center">
      <div id="student" class="flex justify-center items-center">
        <student-register v-show="isStudent">
          <div @click="org" class="w-full flex flex-col justify-center items-center mt-3 space-y-3 md:hidden">
            <p class="uppercase text-xs">Or</p>
            <form-btn class="bg-zinc-100 flex text-black hover:bg-zinc-200"> Register as Recruiter </form-btn>
          </div>
        </student-register>
        <div class="hidden md:block">
          <div v-show="isStudent" id="screen" class="w-96 h-96 p-6 ml-8 flex flex-col justify-center items-center space-y-4">
            <h2 class="text-center text-xl font-medium">Not a Student?</h2>
            <p class="text-center text-base">Join our platform as an organization to recruit countless eager students</p>
            <form-btn @e="org">Register as Recruiter</form-btn>
          </div>
        </div>
      </div>
      <div id="org" class="flex justify-center items-center">
        <div class="hidden md:block">
          <div v-show="isOrg" id="screen" class="w-96 h-96 p-6 mr-8 flex flex-col justify-center items-center space-y-4">
            <h2 class="text-center text-xl font-medium">Not a Recruiter?</h2>
            <p class="text-center text-base">Join our platform as a student to access countless opportunities</p>
            <form-btn @e="student">Register as Student</form-btn>
          </div>
        </div>
        <org-register v-show="isOrg">
          <div @click="student" class="w-full flex flex-col justify-center items-center mt-3 space-y-3 md:hidden">
            <p class="uppercase text-xs">Or</p>
            <form-btn @submit.prevent class="text-black bg-zinc-100 flex hover:bg-zinc-200"> Register as Student </form-btn>
          </div>
        </org-register>
      </div>
    </div>
    <alert />
  </div>
</template>

<script>
import OrgRegister from '../components/OrgRegister.vue'
import StudentRegister from '../components/StudentRegister.vue'
import FormBtn from '~/components/FormBtn.vue'
export default {
  components: { StudentRegister, OrgRegister, FormBtn },
  name: 'register',
  data() {
    return {
      isStudent: this.$store.state.registerType === 'Student' ? true : false,
      isOrg: this.$store.state.registerType === 'Org' ? true : false,
    }
  },
  methods: {
    org() {
      if (this.isStudent) {
        this.isStudent = false
        this.isOrg = true
      }
    },
    student() {
      if (this.isOrg) {
        this.isOrg = false
        this.isStudent = true
      }
    },
  },
}
</script>
