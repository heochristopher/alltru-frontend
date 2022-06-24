<template>
  <div class="">
    <div
      v-if="listing.type === 'Volunteer'"
      class="uppercase px-2 py-1 rounded-full bg-blue-400"
    >
      <p class="text-white text-xs">Volunteer</p>
    </div>
    <div
      v-else-if="listing.type === 'Internship'"
      class="uppercase px-2 py-1 rounded-full bg-violet-400"
    >
      <p class="text-white text-xs">Internship</p>
    </div>
    <div v-else class="uppercase px-2 py-1 rounded-full bg-red-400">
      <p class="text-white text-xs">Job</p>
      <!-- if job then show hourly rate -->
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
