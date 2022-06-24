<template>
    <div class="">
        <button class="w-full bg-blue-300 rounded-sm justify-center items-center h-12" v-if="!isOpen" @click="isOpen = true">Filter Listings</button>
        <div class="flex content-center item-start h-full mt-2" v-if="isOpen">
            <form class="flex flex-col mx-auto space-y-8 w-11/12" @submit.prevent="search" method="GET">
                <div class="type">
                    <label for="type">Opportunity Type</label>
                    <div class="flex content-center w-full border border-gray-400 rounded-sm justify-evenly divide-x h-11 text-center items-center">
                        <div class="hover:bg-blue-300 w-1/4 h-full items-center relative">
                            <input type="radio" class="opacity-0 absolute w-full h-full left-0" id="all" :value="null" v-model="type" />
                            <label class="" for="all">All</label>
                        </div>
                        <div class="hover:bg-blue-300 w-1/4 h-full my-auto relative">
                            <input type="radio" class="opacity-0 absolute w-full h-full left-0" id="volunteer" value="Volunteer" v-model="type" />
                            <label class="" for="volunteer">Volunteer</label>
                        </div>
                        <div class="hover:bg-blue-300 w-1/4 h-full my-auto relative">
                            <input type="radio" class="opacity-0 absolute w-full h-full left-0" id="internship" value="Internship" v-model="type" />
                            <label class="" for="internship">Internship</label>
                        </div>
                        <div class="hover:bg-blue-300 w-1/4 h-full my-auto relative">
                            <input type="radio" class="opacity-0 absolute w-full h-full left-0" id="job" value="Job" v-model="type" />
                            <label class="" for="job">Job</label>
                        </div>
                        
                    </div>
                </div>
                <div class="location">
                    <label for="location">Location Preferences</label>
                    <div class="flex content-center w-full border border-gray-400 rounded-sm justify-evenly divide-x h-11 text-center items-center">
                        <div class="hover:bg-blue-300 w-1/3 h-full items-center relative">
                            <input type="radio" class="opacity-0 absolute w-full h-full left-0" id="all" :value="null" v-model="remote" />
                            <label class="" for="all">All</label>
                        </div>
                        <div class="hover:bg-blue-300 w-1/3 h-full items-center relative">
                            <input type="radio" class="opacity-0 absolute w-full h-full left-0" id="on-site" :value="false" v-model="remote" />
                            <label class="" for="on-site">On-Site</label>
                        </div>
                        <div class="hover:bg-blue-300 w-1/3 h-full items-center relative">
                            <input type="radio" class="opacity-0 absolute w-full h-full left-0" id="remote" :value="true" v-model="remote" />
                            <label class="" for="remote">Remote</label>
                        </div>
                    </div>
                </div>
                <div v-if="remote === false" class="zipcode">
                    <label for="zip">Zipcode</label>
                    <div class="flex content-center w-full border border-gray-400 rounded-sm h-11 text-center items-center">
                        <img class="mx-4" src="@/assets/icons/map-pin.svg" alt="pin">
                        <input class="w-full h-full" id="zip" type="number" placeholder="Enter zipcode" v-model="zipcode">
                    </div>
                </div>
                <!-- <div class="tags">
                </div> -->
            <button class="w-full bg-blue-300 rounded-sm justify-center items-center h-12">Search Listings</button>
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
        search: function() {
            this.isOpen = false
            const inputs = [
                {type: this.type},
                {remote: this.remote},
                {zip: this.zipcode}
            ]
            const filters = []
            for(let i = 0; i < inputs.length; i++) {
                const entry = Object.entries(inputs[i])
                let query = ''
                if(entry[0][0] === 'zip') {
                    query = `location.${entry[0][0]}=${entry[0][1]}`
                } else {
                    query = `${entry[0][0]}=${entry[0][1]}`
                }
                if(entry[0][1] !== null) {
                    filters.push(query)
                }
            }
            console.log('asdf')
            let query = ''
            filters.forEach((e) => {
                if(query === '') {
                    query += e
                } else {
                    query += `&${e}`
                }
            })
            this.$store.dispatch('ADD_FILTERS', query)
        }
    }
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
