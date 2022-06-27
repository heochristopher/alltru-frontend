<template>
    <div id="">
        <navbar/>
        <div class="mt-24">
            <edit-profile/>
            <user :user="user"/>
            <contact-info 
            :mail="user.email"
            :github="user.contact.github"
            :linkedin="user.contact.linkedIn"
            />
            <div id="listings" class="mx-4">
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
</template>

<script>
export default {
    data() {
        return {
            selected: 'applied',
        }
    },
    props: {
        user: Object,
        saved: Array,
        applied: Array,
    }
}
</script>

<style lang="scss" scoped>
    
</style>