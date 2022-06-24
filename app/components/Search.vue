<template>
  <div id="filter" class="w-full h-full flex justify-center items-center">
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
            @click="toggle"
            class="w-1/4 h-full flex justify-center items-center relative ease-in duration-100 hover:bg-violet-200"
          >
            <input
              type="radio"
              class="cursor-pointer opacity-0 absolute w-full h-full left-0"
              id="all"
              value="all"
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
              id="toggle"
              value="volunteer"
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
              id="toggle"
              value="internship"
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
              id="toggle"
              value="job"
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
              id="toggle"
              value="all"
              v-model="location"
            />
            <label class="" for="all">All</label>
          </div>
          <div
            class="w-1/3 h-full flex justify-center items-center relative ease-in duration-100 hover:bg-violet-200"
          >
            <input
              type="radio"
              class="cursor-pointer opacity-0 absolute w-full h-full left-0"
              id="toggle"
              value="on-site"
              v-model="location"
            />
            <label class="" for="on-site">On-Site</label>
          </div>
          <div
            class="w-1/3 h-full flex justify-center items-center relative ease-in duration-100 hover:bg-violet-200"
          >
            <input
              type="radio"
              class="cursor-pointer opacity-0 absolute w-full h-full left-0"
              id="toggle"
              value="remote"
              v-model="location"
            />
            <label class="" for="remote">Remote</label>
          </div>
        </div>
      </div>
      <div
        id="zipcode"
        class="flex flex-col justify-center items-center space-y-2"
      >
        <label for="zip">Search by Zipcode</label>
        <div
          class="flex justify-start items-center w-full h-12 text-sm bg-zinc-100 rounded-md border-zinc-300 border-solid border"
        >
          <img class="mx-2" src="@/assets/icons/map-pin.svg" alt="pin" />
          <input
            class="w-full h-12 bg-zinc-100"
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
      <form-btn>Search Listings</form-btn>
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
    toggle() {
      if (
        document.querySelector('#toggle').classList.contains('bg-violet-200')
      ) {
        document.querySelector('#toggle').classList.remove('bg-violet-200')
      } else {
        document.querySelector('#toggle').classList.add('bg-violet-200')
      }
    },
  },
}
</script>
