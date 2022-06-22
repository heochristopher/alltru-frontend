<template>
  <input
    class="block w-full h-12 text-sm p-3 bg-zinc-100 rounded-md border-zinc-300 border-solid border"
  />
</template>

<script>
export default {
  name: 'FormInput',
}
</script>

<style scoped>
::placeholder {
  color: #151515;
  opacity: 0.6;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
