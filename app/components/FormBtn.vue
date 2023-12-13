<template>
  <button @click="$emit('e')" id="btn" class="w-full h-10 text-md text-white flex justify-center items-center rounded-md ease-in duration-150 hover:opacity-90">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'FormButton',
}
</script>

<style scoped>
#btn {
  background: linear-gradient(90.73deg, rgb(253 164 175) 4%, rgb(168 85 247) 97.46%);
}
</style>
