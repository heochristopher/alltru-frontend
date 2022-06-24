<template>
  <div id="filter" class="flex justify-center item-start h-full mt-2">
    <form
      class="flex flex-col mx-auto space-y-8 w-11/12"
      @submit.prevent="search"
      method="GET"
    >
      <div class="type">
        <label for="type">Opportunity Type</label>
        <div
          class="flex content-center w-full border border-gray-400 rounded-sm justify-evenly divide-x h-11 text-center items-center"
        >
          <div class="hover:bg-blue-300 w-1/4 h-full items-center relative">
            <input
              type="radio"
              class="opacity-0 absolute w-full h-full left-0"
              id="all"
              value="all"
              v-model="type"
            />
            <label class="" for="all">All</label>
          </div>
          <div class="hover:bg-blue-300 w-1/4 h-full my-auto relative">
            <input
              type="radio"
              class="opacity-0 absolute w-full h-full left-0"
              id="volunteer"
              value="volunteer"
              v-model="type"
            />
            <label class="" for="volunteer">Volunteer</label>
          </div>
          <div class="hover:bg-blue-300 w-1/4 h-full my-auto relative">
            <input
              type="radio"
              class="opacity-0 absolute w-full h-full left-0"
              id="internship"
              value="internship"
              v-model="type"
            />
            <label class="" for="internship">Internship</label>
          </div>
          <div class="hover:bg-blue-300 w-1/4 h-full my-auto relative">
            <input
              type="radio"
              class="opacity-0 absolute w-full h-full left-0"
              id="job"
              value="job"
              v-model="type"
            />
            <label class="" for="job">Job</label>
          </div>
        </div>
      </div>
      <div class="location">
        <label for="location">Location Preferences</label>
        <div
          class="flex content-center w-full border border-gray-400 rounded-sm justify-evenly divide-x h-11 text-center items-center"
        >
          <div class="hover:bg-blue-300 w-1/3 h-full items-center relative">
            <input
              type="radio"
              class="opacity-0 absolute w-full h-full left-0"
              id="all"
              value="all"
              v-model="location"
            />
            <label class="" for="all">All</label>
          </div>
          <div class="hover:bg-blue-300 w-1/3 h-full items-center relative">
            <input
              type="radio"
              class="opacity-0 absolute w-full h-full left-0"
              id="on-site"
              value="on-site"
              v-model="location"
            />
            <label class="" for="on-site">On-Site</label>
          </div>
          <div class="hover:bg-blue-300 w-1/3 h-full items-center relative">
            <input
              type="radio"
              class="opacity-0 absolute w-full h-full left-0"
              id="remote"
              value="remote"
              v-model="location"
            />
            <label class="" for="remote">Remote</label>
          </div>
        </div>
      </div>
      <div class="zipcode">
        <label for="zip">Search by Zipcode</label>
        <div
          class="flex content-center w-full border border-gray-400 rounded-sm h-11 text-center items-center"
        >
          <img class="mx-2" src="@/assets/icons/map-pin.svg" alt="pin" />
          <input
            class="w-full h-full"
            id="zip"
            type="number"
            placeholder="Zipcode"
            max="5"
            v-model="zipcode"
          />
        </div>
      </div>
      <!-- <div class="tags">
            </div> -->
      <button
        class="w-full bg-blue-300 rounded-sm justify-center items-center h-12"
      >
        Search Listings
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: '',
      location: '',
      zipcode: '',
    }
  },
  methods: {
    search: function () {
      console.log(this.type)
      console.log(this.location)
    },
  },
}
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
