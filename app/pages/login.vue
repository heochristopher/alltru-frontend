<template>
  <div id="login" class="w-full h-screen">
    <div class="absolute w-full h-20 flex justify-center items-center">
      <NuxtLink to="/listings"
        ><h1 class="text-3xl font-medium truncate">Alltru</h1></NuxtLink
      >
    </div>
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
