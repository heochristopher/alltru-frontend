<template>
    <div class="listing">
        <div class="logo">
            <div class="placeholder"></div>
        </div>
        <div class="info">
            <h3>Company Name</h3>
            <h2>Position Offered</h2>
            <div class="type">
                <h4>Internship</h4>
                <h4>$15/hour</h4>
            </div>
            <div class="location">
                <h5>On-site</h5>
                <h5>Brooklyn, NY</h5>
            </div>
            <div class="tags">

            </div>
            <p>Posted x days ago</p>
        </div>
        <div class="options">
            <div class="save">
                <button>Save</button>
            </div>
            <div class="apply">
                <button>Apply</button>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.listing {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
}

.logo {
    .placeholder {
        background-color: #a1a1a1;
        width: 5rem;
        height: 5rem;
    }
}
</style>