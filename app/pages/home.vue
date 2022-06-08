<template>
  <div class="home">
    <h1>hello world</h1>
    <btn>
      submit
    </btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.home {
  background-color: $bg;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>