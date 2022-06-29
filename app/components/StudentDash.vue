<template>
    <div id="student">
        <edit-profile class="mt-24 -mb-24"/>
        <div id="" v-on="this.$store.state.modal ? {click: toggleModal} : {}">
            <navbar/>
            <div class="mt-24">
                <user :user="user"/>
                <contact-info 
                :mail="user.email"
                :github="user.contact.github"
                :linkedin="user.contact.linkedIn"
                />
                <biography :bio="user.biography"/>
                <div id="listings" class="mx-4 mt-8">
                    <h2 class="text-2xl font-semibold">My Listings</h2>
                    <div id="toggles" class="flex h-12 justify-evenly divide-x items-center text-sm bg-zinc-100 rounded-md border-zinc-300 border-solid border w-5/6 mt-2">
                        <toggle v-model="selected" value="applied" class="w-1/2">Applied</toggle>
                        <toggle v-model="selected" value="saved" class="w-1/2">Saved</toggle>
                    </div>
                    <div v-if="selected === 'applied'" id="applied" class="mt-4">
                        <h3 class="text-xl">Applied Listings</h3>
                        <listing
                        v-for="listing in applied"
                        :key="listing.position"
                        :listing="listing"
                        :isSaved="user.savedListings.includes(listing._id)"
                        />
                    </div>
                    <div v-else id="saved" class="mt-4">
                        <h3 class="text-xl">Saved Listings</h3>
                        <listing
                        v-for="listing in saved"
                        :key="listing.position"
                        :listing="listing"
                        :isSaved="user.savedListings.includes(listing._id)"
                        />
                    </div>
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
        }
    },
    props: {
        user: Object,
        saved: Array,
        applied: Array,
    }
}
</script>
