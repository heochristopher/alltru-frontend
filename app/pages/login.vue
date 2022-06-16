<template>
    <div class="login">
        <signin/>
    </div>
</template>

<script>
import Signin from '../components/Signin.vue'
export default {
  components: { Signin },
    name: "Login",
}
</script>

<style lang="scss" scoped>
.login {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>