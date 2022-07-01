<template>
  <button
    @click="$emit('e')"
    class="w-full h-12 text-base bg-violet-200 flex justify-center items-center rounded-md ease-in duration-150 hover:bg-violet-300"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'FormButton',
}
</script>
