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
