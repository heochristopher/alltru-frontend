<template>
    <div class="user">
        <div class="icon">
            <img :src="user.avatar" class="placeholder" alt="">
        </div>
        <div class="info">
            <h2>{{`${user.firstName} ${user.lastName}`}}</h2>
            <h4>{{user.affiliation}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "User",
    data() {
        return {
            user: this.$store.state.user
        }
    }
}
</script>

<style lang="scss" scoped>
.user {
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    margin-right: 1.5rem;
    .placeholder {
        width: 8rem;
        height: 8rem;
        border-radius: 4rem;
        background-color: #d9d9d9;
    }
}
</style>