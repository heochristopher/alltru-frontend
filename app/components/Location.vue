<template>
  <div class="locationpref">
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
      <h6 class="uppercase text-xs">{{ listing.location.borough }}</h6>
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

<style lang="scss" scoped>
// .remote, .onsite {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 4.5rem;
//     height: 1.1rem;
//     border-radius: 0.3rem;

//     p {
//         text-transform: uppercase;
//         font-size: 0.8rem;
//         color: #fff;
//     }
// }

.coral {
  background-color: lightcoral;
}

.blue {
  background-color: skyblue;
}

.location {
  margin-left: 0.5rem;
}
.onsite-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
