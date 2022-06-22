<template>
  <div
    id="register"
    class="w-full h-screen flex flex-col justify-center items-center relative"
  >
    <div id="content" class="flex justify-center items-start">
      <student-register id="student" class="block" />
      <org-register id="org" class="hidden" />
    </div>
  </div>
</template>

<script>
import OrgRegister from '../components/OrgRegister.vue'
import StudentRegister from '../components/StudentRegister.vue'
export default {
  components: { StudentRegister, OrgRegister },
  name: 'register',
}
</script>
