<template>
  <div
    id="register"
    class="w-full h-screen flex flex-col justify-center items-center relative"
  >
    <div id="content" class="flex justify-center items-start">
      <div id="student" class="flex justify-center items-center">
        <student-register v-show="isStudent">
          <p
            @click="student"
            class="p-4 text-sm text-zinc-500 cursor-pointer md:hidden"
          >
            Not a Student?
          </p></student-register
        >
        <div class="hidden md:block">
          <div
            v-show="isStudent"
            id="screen"
            class="w-96 h-96 p-6 ml-8 flex flex-col justify-center items-center space-y-5"
          >
            <h2 class="text-center text-2xl">Not a Student?</h2>
            <p class="text-center text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              aliquid tempore mollitia.
            </p>
            <form-btn @e="student">Sign Up as Organization</form-btn>
          </div>
        </div>
      </div>
      <div id="org" class="flex justify-center items-center">
        <div class="hidden md:block">
          <div
            v-show="isOrg"
            id="screen"
            class="w-96 h-96 p-6 mr-8 flex flex-col justify-center items-center space-y-5"
          >
            <h2 class="text-center text-2xl">Not an Organization?</h2>
            <p class="text-center text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus inventore tempore deleniti.
            </p>
            <form-btn @e="org">Sign Up as Student</form-btn>
          </div>
        </div>
        <org-register v-show="isOrg">
          <p
            @click="org"
            class="p-4 text-sm text-zinc-500 cursor-pointer md:hidden"
          >
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
      isStudent: true,
      isOrg: false,
    }
  },
  methods: {
    student() {
      if (this.isStudent) {
        this.isStudent = false
        this.isOrg = true
      }
    },
    org() {
      if (this.isOrg) {
        this.isOrg = false
        this.isStudent = true
      }
    },
  },
}
</script>
