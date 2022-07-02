<template>
    <div id="student" class="">
        <div id="" v-on="this.$store.state.modal ? {click: toggleModal} : {}">
            <navbar/>
            <div class="w-full h-auto mt-28 flex flex-col justify-center items-center space-y-6 pb-8">
                <div id="user-info" class="w-11/12 max-w-4xl h-auto flex justify-between items-start rounded-lg shadow-md sm:p-4">
                    <div class="flex flex-col justify-start items-start space-y-4">
                        <user :user="user" class="w-5/6"/>
                        <div v-if="user.biography" id="bio" class="w-5/6 mx-4">
                            <h2 class="font-semibold text-lg sm:text-lg">About</h2>
                            <p class="text-zinc-600 text-sm sm:text-base">{{user.biography}}</p>
                        </div>
                        <contact-info 
                        :mail="user.email"
                        :github="user.contact.github"
                        :linkedin="user.contact.linkedIn"
                        />
                    </div>
                    <div class="absolute right-6 sm:relative sm:right-0">
                        <edit-profile/>
                    </div>
                </div>
                <div id="listings" class="w-11/12 max-w-4xl mb-4 h-auto flex flex-col justify-start items-start rounded-lg shadow-md p-4 sm:py-4 sm:px-8">
                    <h2 class="text-2xl font-semibold">My Listings</h2>
                    <div class="w-full flex justify-center items-center">
                        <div id="toggles" class="flex h-12 w-full max-w-2xl justify-evenly divide-x items-center text-base bg-zinc-100 rounded-md border-zinc-300 border-solid border mt-3">
                            <toggle v-model="selected" value="applied" class="w-1/2">Applied</toggle>
                            <toggle v-model="selected" value="saved" class="w-1/2">Saved</toggle>
                        </div>
                    </div>
                    <div v-if="selected === 'applied'" id="applied" class="w-full mt-4">
                        <h3 class="text-lg font-medium text-zinc-600">Applied Listings</h3>
                        <div class="w-full flex flex-col justify-center items-center">
                            <listing
                            v-for="listing in applied"
                            :key="listing._id"
                            :listing="listing"
                            :isSaved="user.savedListings.includes(listing._id)"
                            />
                        </div>
                    </div>
                    <div v-else id="saved" class="w-full mt-4">
                        <h3 class="text-lg font-medium text-zinc-600">Saved Listings</h3>
                        <div class="w-full flex flex-col justify-center items-center">
                        <listing
                        v-for="listing in saved"
                        :key="listing._id"
                        :listing="listing"
                        :isSaved="user.savedListings.includes(listing._id)"
                        />
                        </div>
                    </div>
                </div>
                <div id="logout" class="w-11/12 max-w-4xl h-auto flex justify-center items-center rounded-lg shadow-md p-2 sm:p-4">
                    <button
                        @click="logout"
                        class="w-full max-w-sm h-12 text-base bg-red-100 flex justify-center items-center rounded-md ease-in duration-150 text-red-600 hover:bg-red-200 hover:text-red-700"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 'applied',
        }
    },
    methods: {
        toggleModal() {
            this.$store.dispatch('CHANGE_MODAL')
        },
        async logout() {
            try {
                const res = await this.$axios.$post('/logout')
                console.log(res)
                this.$store.dispatch('LOGOUT')
                this.$router.push('/')
            } catch (error) {
                console.log(error)
            }
        }
    },
    props: {
        user: Object,
        saved: Array,
        applied: Array,
    }
}
</script>
