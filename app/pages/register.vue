<template>
  <div class="register">
    <div class="content">
      <student-register/>
      <org-register/>
    </div>
  </div>
</template>

<script>
import OrgRegister from '../components/OrgRegister.vue'
import StudentRegister from '../components/StudentRegister.vue'
export default {
  components: { StudentRegister, OrgRegister },
    name: "register",
}
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>