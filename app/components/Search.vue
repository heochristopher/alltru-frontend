<template>
  <div id="filter" class="w-full h-full flex flex-col justify-center items-center space-y-4">
    <div class="w-full h-10 flex justify-between items-center cursor-pointer shadow-sm">
      <p class="mx-1 text-base">Search</p>
    </div>
    <form class="flex flex-col mx-auto space-y-6 w-full" @submit.prevent="search" method="GET">
      <form-input type="text" name="keywords" v-model="keywords" placeholder="Keywords"/> 
      <form-btn>Search Listings</form-btn>
    </form>
    <div class="w-full h-10 flex justify-between items-center cursor-pointer shadow-sm" @click="toggleFilter">
      <p class="mx-1 text-base">Filters</p>
      <img v-if="!isOpen" class="mx-1" src="@/assets/icons/chevron-down.svg" alt="down" />
      <img v-if="isOpen" class="mx-1" src="@/assets/icons/chevron-up.svg" alt="up" />
    </div>
    <div class="flex flex-col justify-center item-start h-full w-full" v-if="isOpen">
      <form class="flex flex-col mx-auto space-y-6 w-full" @submit.prevent="filter" method="GET">
        <div id="type" class="flex flex-col justify-center items-start space-y-2">
          <label for="type" class="text-sm">Opportunity Type</label>
          <div class="flex h-10 w-full justify-evenly divide-x items-center text-sm rounded-md border-zinc-200 text-zinc-400 border-solid border cursor-pointer">
            <toggle v-model="type" value="null" class="w-1/4">All</toggle>
            <toggle v-model="type" value="Volunteer" class="w-1/4">Volunteer</toggle>
            <toggle v-model="type" value="Internship" class="w-1/4">Internship</toggle>
            <toggle v-model="type" value="Job" class="w-1/4">Job</toggle>
          </div>
        </div>
        <div id="remote" class="flex flex-col justify-center items-start space-y-2">
          <label for="remote" class="text-sm">Location Preferences</label>
          <div class="flex h-10 w-full justify-evenly divide-x items-center text-sm rounded-md border-zinc-200 text-zinc-400 border-solid border">
            <toggle v-model="remote" value="null" class="w-1/3">All</toggle>
            <toggle v-model="remote" value="false" class="w-1/3">On-Site</toggle>
            <toggle v-model="remote" value="true" class="w-1/3">Remote</toggle>
          </div>
        </div>
        <div id="zipcode" class="flex flex-col justify-center items-center space-y-2" v-if="remote !== 'true'">
          <div id="search" class="flex justify-start items-center w-full">
            <!-- <div class="">
              <img
                class="mr-2.5 overflow-hidden"
                src="@/assets/icons/map-pin.svg"
                alt="pin"
              />
            </div> -->
            <form-input type="number" name="zipcode" v-model="zipcode" :required="false" placeholder="Zipcode" />

            <!-- ** THIS DOESN'T WORK ** -->

          </div>
        </div>
        <!-- <div class="tags">
                </div> -->
        <form-btn>Filter Listings</form-btn>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      isOpen: false,
      type: 'null',
      remote: 'null',
      zipcode: 'null',
      keywords: null,
    }
  },
  methods: {
    search() {
      this.$store.dispatch('ADD_SEARCH_QUERY', this.keywords)
    },
    filter() {
      if (this.remote) {
        this.zip === 'null'
      }
      const inputs = [{ type: this.type }, { remote: this.remote }, { zip: this.zipcode }]
      const filters = []
      for (let i = 0; i < inputs.length; i++) {
        const entry = Object.entries(inputs[i])
        let query = ''
        if (entry[0][0] === 'zip') {
          query = `location.${entry[0][0]}=${entry[0][1]}`
        } else {
          query = `${entry[0][0]}=${entry[0][1]}`
        }

        if (!(entry[0][1] === 'null' || entry[0][1] === '')) {
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
      if (query === '') {
        query = 'all'
      }
      this.$store.dispatch('ADD_FILTERS', query)
    },
    toggleFilter() {
      if (!this.isOpen) {
        this.isOpen = true
      } else {
        this.isOpen = false
      }
    },
  },
}
</script>
