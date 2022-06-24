<template>
  <div id="filter" class="w-full h-full flex justify-center items-center">
    <button
      class="w-full bg-blue-300 rounded-sm justify-center items-center h-12"
      v-if="!isOpen"
      @click="isOpen = true"
    >
      Filter Listings
    </button>
    <div class="flex content-center item-start h-full" v-if="isOpen">
      <form
        class="flex flex-col mx-auto space-y-8 w-full"
        @submit.prevent="search"
        method="GET"
      >
        <div
          id="type"
          class="flex flex-col justify-center items-center space-y-2"
        >
          <label for="type">Opportunity Type</label>
          <div
            class="flex h-12 w-full justify-evenly divide-x items-center text-sm bg-zinc-100 rounded-md border-zinc-300 border-solid border cursor-pointer"
          >
            <div
              class="w-1/4 h-full flex justify-center items-center relative ease-in duration-100 hover:bg-violet-200"
            >
              <input
                type="radio"
                class="cursor-pointer opacity-0 absolute w-full h-full left-0"
                id="all"
                :value="null"
                v-model="type"
              />
              <label class="" for="all">All</label>
            </div>
            <div
              class="w-1/4 h-full flex justify-center items-center relative ease-in duration-100 hover:bg-violet-200"
            >
              <input
                type="radio"
                class="cursor-pointer opacity-0 absolute w-full h-full left-0"
                id="volunteer"
                value="Volunteer"
                v-model="type"
              />
              <label class="" for="volunteer">Volunteer</label>
            </div>
            <div
              class="w-1/4 h-full flex justify-center items-center relative ease-in duration-100 hover:bg-violet-200"
            >
              <input
                type="radio"
                class="cursor-pointer opacity-0 absolute w-full h-full left-0"
                id="internship"
                value="Internship"
                v-model="type"
              />
              <label class="" for="internship">Internship</label>
            </div>
            <div
              class="w-1/4 h-full flex justify-center items-center relative ease-in duration-100 hover:bg-violet-200"
            >
              <input
                type="radio"
                class="cursor-pointer opacity-0 absolute w-full h-full left-0"
                id="job"
                value="Job"
                v-model="type"
              />
              <label class="" for="job">Job</label>
            </div>
          </div>
        </div>
        <div
          id="location"
          class="flex flex-col justify-center items-center space-y-2"
        >
          <label for="location">Location Preferences</label>
          <div
            class="flex h-12 w-full justify-evenly divide-x items-center text-sm bg-zinc-100 rounded-md border-zinc-300 border-solid border"
          >
            <div
              class="w-1/3 h-full flex justify-center items-center relative ease-in duration-100 hover:bg-violet-200"
            >
              <input
                type="radio"
                class="cursor-pointer opacity-0 absolute w-full h-full left-0"
                id="all"
                :value="null"
                v-model="remote"
              />
              <label class="" for="all">All</label>
            </div>
            <div
              class="w-1/3 h-full flex justify-center items-center relative ease-in duration-100 hover:bg-violet-200"
            >
              <input
                type="radio"
                class="cursor-pointer opacity-0 absolute w-full h-full left-0"
                id="on-site"
                :value="false"
                v-model="remote"
              />
              <label class="" for="on-site">On-Site</label>
            </div>
            <div
              class="w-1/3 h-full flex justify-center items-center relative ease-in duration-100 hover:bg-violet-200"
            >
              <input
                type="radio"
                class="cursor-pointer opacity-0 absolute w-full h-full left-0"
                id="remote"
                :value="true"
                v-model="remote"
              />
              <label class="" for="remote">Remote</label>
            </div>
          </div>
        </div>
        <div
          v-if="remote === false"
          id="zipcode"
          class="flex flex-col justify-center items-center space-y-2"
        >
          <label for="zip">Zipcode</label>
          <div
            class="flex justify-start items-center w-full h-12 text-sm bg-zinc-100 rounded-md border-zinc-300 border-solid border"
          >
            <img class="mx-4" src="@/assets/icons/map-pin.svg" alt="pin" />
            <input
              class="w-full h-12 bg-zinc-100"
              id="zip"
              type="number"
              placeholder="Enter zipcode"
              v-model="zipcode"
            />
          </div>
        </div>
        <!-- <div class="tags">
                </div> -->
        <form-btn>Search Listings</form-btn>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      type: null,
      remote: null,
      zipcode: null,
    }
  },
  methods: {
    search: function () {
      this.isOpen = false
      const inputs = [
        { type: this.type },
        { remote: this.remote },
        { zip: this.zipcode },
      ]
      const filters = []
      for (let i = 0; i < inputs.length; i++) {
        const entry = Object.entries(inputs[i])
        let query = ''
        if (entry[0][0] === 'zip') {
          query = `location.${entry[0][0]}=${entry[0][1]}`
        } else {
          query = `${entry[0][0]}=${entry[0][1]}`
        }
        if (entry[0][1] !== null) {
          filters.push(query)
        }
      }
      let query = ''
      filters.forEach((e) => {
        if (query === '') {
          query += e
        } else {
          query += `&${e}`
        }
      })
      this.$store.dispatch('ADD_FILTERS', query)
    },
  },
}
</script>
