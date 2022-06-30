<template>
    <div id="">
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
                <div id="toggles" class="flex h-12 justify-evenly divide-x items-center text-sm bg-zinc-100 rounded-md border-zinc-300 border-solid border w-5/6 my-2 mx-4">
                        <toggle v-model="selected" value="listings" class="w-1/2">Listings</toggle>
                        <toggle v-model="selected" value="notifications" class="w-1/2">Notifications</toggle>
                </div>
                <div id="listings" class="mx-4" v-if="selected === 'listings'">
                    <h2 class="text-2xl font-semibold">My Listings</h2>
                    <listing
                    v-for="listing in listings"
                    :key="listing._id"
                    :listing="listing"
                    :isSaved="null"
                    />
                </div>
                <div id="notifications" class="m-4" v-if="selected === 'notifications'">Coming Soon...</div>
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
            this.$store.dispatch('CHANGE_MODAL')
        }
    },
    props: {
        user: Object,
        listings: Array
    }
}
</script>
