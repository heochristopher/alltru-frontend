<template>
    <div class="flex content-center item-start h-full mt-2">
        <form class="flex flex-col mx-auto space-y-8" @submit.prevent="search" method="GET">
            <div class="type">
                <label for="type">Opportunity Type</label>
                <div class="flex content-center w-full border border-gray-400 rounded-sm justify-evenly divide-x h-11 text-center items-center">
                    <div class="hover:bg-blue-300 w-1/4 h-full items-center relative">
                        <input type="radio" class="opacity-0 absolute w-full h-full left-0" id="all" value="all" v-model="type" />
	                    <label class="" for="all">All</label>
                    </div>
                    <div class="hover:bg-blue-300 w-1/4 h-full my-auto relative">
                        <input type="radio" class="opacity-0 absolute w-full h-full left-0" id="volunteer" value="volunteer" v-model="type" />
	                    <label class="" for="volunteer">Volunteer</label>
                    </div>
                    <div class="hover:bg-blue-300 w-1/4 h-full my-auto relative">
                        <input type="radio" class="opacity-0 absolute w-full h-full left-0" id="internship" value="internship" v-model="type" />
	                    <label class="" for="internship">Internship</label>
                    </div>
                    <div class="hover:bg-blue-300 w-1/4 h-full my-auto relative">
                        <input type="radio" class="opacity-0 absolute w-full h-full left-0" id="job" value="job" v-model="type" />
	                    <label class="" for="job">Job</label>
                    </div>
                    
                </div>
            </div>
            <div class="location">
                <label for="location">Location Preferences</label>
                <div class="flex content-center w-full border border-gray-400 rounded-sm justify-evenly divide-x h-11 text-center items-center">
                    <div class="hover:bg-blue-300 w-1/3 h-full items-center relative">
                        <input type="radio" class="opacity-0 absolute w-full h-full left-0" id="all" value="all" v-model="location" />
	                    <label class="" for="all">All</label>
                    </div>
                    <div class="hover:bg-blue-300 w-1/3 h-full items-center relative">
                        <input type="radio" class="opacity-0 absolute w-full h-full left-0" id="on-site" value="on-site" v-model="location" />
	                    <label class="" for="on-site">On-Site</label>
                    </div>
                    <div class="hover:bg-blue-300 w-1/3 h-full items-center relative">
                        <input type="radio" class="opacity-0 absolute w-full h-full left-0" id="remote" value="remote" v-model="location" />
	                    <label class="" for="remote">Remote</label>
                    </div>
                </div>
            </div>
            <div class="search">
                <label for="zip">Search Zipcode</label>
                <img class="pin" src="@/assets/icons/map-pin.svg" alt="pin">
                <input class="searchbar" id="zip" type="number" placeholder="Anywhere" maxlength="5">
            </div>
            <!-- <div class="tags">
            </div> -->
            <div class=" m-1 flex justify-center items-center">
                <button class="">Search</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            type: "",
            location: "",
        }
    },
    methods: {
        search: function() {
            console.log(this.type)
            console.log(this.location)
        }
    }
}
</script>

<style lang="scss" scoped>
.search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    .searchbar {
        margin: 0.5rem 0;
        width: 20rem;
        height: 3rem;
        padding: 1rem 2.4rem;
        background-color: #f5f4f4;
        border: 1px solid #a1a1a1;
        border-radius: 0.3rem;
        font-family: 'Kumbh Sans', sans-serif;
        font-size: 0.9rem;
    }
    .pin {
        position: absolute;
        margin: 0.5rem;
    }
}

::placeholder {
    font-size: 0.9rem;
    font-family: 'Kumbh Sans', sans-serif;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}


    button {
        width: 20rem;
        height: 3rem;
        border-radius: 0.3rem;
        background-color: skyblue;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
</style>