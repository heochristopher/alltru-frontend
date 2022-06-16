<template>
    <div class="user">
        <div class="icon">
            <div class="placeholder"></div>
        </div>
        <div class="info">
            <h2>Christopher Heo, 17</h2>
            <h4>Staten Island Technical High School</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "User"
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