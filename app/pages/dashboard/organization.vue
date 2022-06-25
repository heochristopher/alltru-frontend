<template>
    <div class="dash">
        <user :user="user"/>
    </div>
</template>

<script>
export default {
    name: "OrgDashboard",
    data() {
        return {
            user: this.$store.state.user
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>