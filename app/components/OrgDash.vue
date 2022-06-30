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
                <div id="listings" class="mx-4">
                    <h2 class="text-2xl font-semibold">My Listings</h2>
                    <listing
                    v-for="listing in listings"
                    :key="listing._id"
                    :listing="listing"
                    :isSaved="null"
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
