<template>
    <div id="org">
        <div id="" v-on="this.$store.state.editModal ? {click: toggleModal} : {}">
            <navbar/>
            <div class="w-full h-auto mt-28 flex flex-col justify-center items-center space-y-6 pb-8">
                <div id="user-info" class="w-11/12 max-w-4xl h-auto flex justify-between items-start rounded-lg shadow-md sm:p-4">
                    <div class="flex flex-col justify-start items-start space-y-4">
                        <user :user="user" class=""/>
                        
                        <div id="bio" class="w-5/6 mx-4">
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
                    <div class="w-full flex justify-center items-center">
                        <div id="toggles" class="flex h-12 w-full max-w-2xl justify-evenly divide-x items-center text-base rounded-md border-zinc-200 text-zinc-400 border-solid border mt-2">
                            <toggle v-model="selected" value="listings" class="w-1/2">Listings</toggle>
                            <toggle v-model="selected" value="notifications" class="w-1/2">Notifications</toggle>
                        </div>
                    </div>
                    <div class="w-full mt-4" v-if="selected === 'listings'">
                    <h3 class="text-xl font-semibold">My Listings</h3>
                    <div class=" w-full flex flex-col justify-center items-center">
                        <listing
                        class="max-w-3xl"
                        v-for="listing in listings"
                        :key="listing._id"
                        :listing="listing"
                        :isSaved="null" 
                        />
                    </div>
                </div>
                <div id="notifications" class="w-full m-4" v-if="selected === 'notifications'">
                    <p class="text-base text-zinc-500">Coming Soon...</p>
                </div>
                </div>
                <div id="logout" class="w-11/12 max-w-4xl h-auto flex justify-center items-center rounded-lg shadow-md p-2 sm:p-4">
                    <button
                        @click="logout"
                        class="w-full max-w-sm h-12 text-base font-medium bg-white flex justify-center items-center rounded-md ease-in duration-150 text-red-500"
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
            selected: 'listings'
        }
    },
    methods: {
        toggleModal() {
            this.$store.dispatch('CHANGE_EDIT_MODAL')
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
        listings: Array
    }
}
</script>
