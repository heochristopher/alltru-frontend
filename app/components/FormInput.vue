<template>
  <div class="relative z-0 w-full group overflow-visible">
    <!-- <input
    @input="updateValue($event.target.value)"
    class="block w-full h-12 p-3 bg-zinc-100 rounded-md border-zinc-300 border-solid border text-sm"
    :value="value"
  /> -->
    <!--  -->

    <input class="block py-2.5 px-3 mt-2.5 w-full text-sm text-zinc-900 bg-transparent rounded-md border border-solid border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-violet-500" id="biography" @input="updateValue($event.target.value)" :name="name" :type="type" :value="value" :required="required ? true : false" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    type: String,
    value: String,
    placeholder: String,
    required: Boolean,
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style scoped>
/* input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-text-fill-color: white !important;
} */
</style>

