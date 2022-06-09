<template>
  <div class="home">
    <navbar/>
    <div class="content">
      <div class="filters">
        <search/>
      </div>
      <div class="listings">
        <listing/>
        <listing/>
        <listing/>
        <listing/>
        <listing/>
        <listing/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend(
  {
   name: 'HomePage'
  })
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.content {
  display: flex;
  justify-content: center;
  align-items: start;
}

.filters {
  width: 30vw;
  min-height: 100vh;
  margin: 2rem 1rem;
  // background-color: skyblue;
}

.listings {
  width: 60vw;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  // background-color: lightcoral;
}
</style>