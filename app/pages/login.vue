<template>
  <div id="login" class="w-full h-screen">
    <navbar />
    <div id="content" class="w-full h-screen flex justify-center items-center">
      <signin />
    </div>
  </div>
</template>

<script>
import Signin from '../components/Signin.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Signin, Navbar },
  name: 'Login',
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
