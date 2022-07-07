<template>
  <button
    @click="$emit('e')"
    class="w-full h-10 text-sm bg-sky-400 text-white flex justify-center items-center rounded-md ease-in duration-150 hover:bg-sky-400"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'FormButton',
}
</script>
