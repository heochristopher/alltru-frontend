<template>
  <input
    @input="updateValue($event.target.value)"
    class="block w-full h-12 p-3 bg-zinc-100 rounded-md border-zinc-300 border-solid border text-sm"
    :value="value"
  />
</template>

<script>
export default {
  props: {
    value: String,
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>
