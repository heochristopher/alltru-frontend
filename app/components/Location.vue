<template>
    <div class="locationpref">
        <!-- use v-show to toggle -->
        <div v-if="listing.remote" class="remote">
            <p>Remote</p>
        </div>
        <div v-else class="onsite-container">
            <div class="onsite"><p>On-Site</p></div>
            <h6 class="location">{{listing.location.borough}}</h6>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        listing: Object
    }
}
</script>

<style lang="scss" scoped>
.remote, .onsite {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.5rem;
    height: 1.1rem;
    border-radius: 0.3rem;

    p {
        text-transform: uppercase;
        font-size: 0.8rem;
        color: #fff;
    }
}

.remote {
    background-color: lightcoral;
}

.onsite {
    background-color: skyblue;
}

.location {
    margin-left: 0.5rem;
}
.onsite-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>