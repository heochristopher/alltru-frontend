<template>
  <div class="mx-4" id="">
    <div class="" v-if="bio">
        <h2 class="font-semibold text-xl">Biography</h2>
        <p class="">{{bio}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        bio: String || null
    }
}
</script>

<style>

</style>