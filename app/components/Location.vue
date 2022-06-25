<template>
  <div id="locationpref">
    <!-- use v-show to toggle -->
    <div
      v-if="listing.remote"
      class="uppercase px-2 py-1 rounded-full bg-orange-400"
    >
      <p class="text-white text-xs">Remote</p>
    </div>
    <div v-else class="flex justify-center items-center space-x-2">
      <div class="uppercase px-2 py-1 rounded-full bg-green-400">
        <p class="text-white text-xs">On-Site</p>
      </div>
      <h6 class="text-sm">{{ listing.location.borough }}, NY</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listing: Object,
  },
}
</script>
