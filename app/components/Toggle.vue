<template>
  <div
    id="toggle"
    class="h-full flex justify-center items-center relative ease-in duration-100 hover:bg-purple-200"
    :class="{checked: isChecked}"
  >
    <input
      type="radio"
      class="cursor-pointer opacity-0 absolute w-full h-full left-0"
      id="all"
      :checked="isChecked"
      :value="value"
      @change="$emit('change', $event.target.value)"
    />
    <label class="text-sm" for=""><slot></slot></label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    "modelValue": { default: null },
    "value": { default: "" }
  },
  computed: {
    isChecked() {
      return this.modelValue == this.value
    },
  },
}
</script>

<style scoped>

.checked {
  background-color: rgb(167, 139, 250);
  color: rgb(255, 255, 255);
}

</style>