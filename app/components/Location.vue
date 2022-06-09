<template>
    <div class="locationpref">
        <!-- use v-show to toggle -->
        <div class="remote">
            <p>Remote</p>
        </div>
        <!-- <div class="onsite">
            <p>On-Site</p>
        </div> -->
    </div>
</template>

<script>
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
</style>