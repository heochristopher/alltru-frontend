<template>
  <div
    id="search"
    class="flex justify-start items-center w-full h-12 text-sm bg-zinc-100 rounded-md border-zinc-300 border-solid border"
  >
    <img class="mx-4" src="@/assets/icons/map-pin.svg" alt="pin" />
    <input
      class="w-full h-12 bg-zinc-100"
      id="zip"
      type="number"
      placeholder="Zipcode"
      v-model="zipcode"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchZipcode',
}
</script>
