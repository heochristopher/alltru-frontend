<template>
    <div id="">
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
                :key="listing.position"
                :listing="listing"
                :isSaved="null"
                />
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
    props: {
        user: Object,
        listings: Array
    }
}
</script>

<style lang="scss" scoped>
    
</style>