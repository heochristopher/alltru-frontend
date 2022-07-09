<template>
  <div class="relative z-0 w-full group overflow-visible">
    <!-- <input
    @input="updateValue($event.target.value)"
    class="block w-full h-12 p-3 bg-zinc-100 rounded-md border-zinc-300 border-solid border text-sm"
    :value="value"
  /> -->
    <input @input="updateValue($event.target.value)" id="floating_first_name" class="block py-2.5 px-2 mt-2.5 w-full text-sm text-zinc-900 bg-transparent rounded-md border border-solid border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-violet-500 peer" placeholder=" " :name="name" :type="type" :value="value" :required="required ? true : false" />
    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm px-1 mt-2.5 bg-white text-zinc-400 duration-300 transform -translate-y-5 translate-x-2 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:translate-x-2 peer-focus:z-20 peer-focus:px-1 overflow-visible">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    type: String,
    value: String,
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

