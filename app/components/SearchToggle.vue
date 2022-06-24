<template>
  <div
    id="toggle"
    class="h-full flex justify-center items-center relative ease-in duration-100 hover:bg-violet-200"
  >
    <input
      type="radio"
      class="cursor-pointer opacity-0 absolute w-full h-full left-0"
      id="all"
      :value="null"
      v-model="type"
    />
    <label class="" for=""><slot></slot></label>
  </div>
</template>

<script>
export default {
  name: 'SearchToggle',
}
</script>
