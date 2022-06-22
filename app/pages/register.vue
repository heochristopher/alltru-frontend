<template>
  <div
    id="register"
    class="w-full h-screen flex flex-col justify-center items-center relative"
  >
    <div id="content" class="flex justify-center items-start">
      <student-register id="student" class="block">
        <p class="p-4 text-sm text-zinc-500 cursor-pointer">Not a Student?</p>
      </student-register>
      <org-register id="org" class="block">
        <p class="p-4 text-sm text-zinc-500 cursor-pointer">
          Not an Organization?
        </p>
      </org-register>
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
