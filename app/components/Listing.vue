<template>
    <div class="listing">
        <div class="content">
            <div class="logo">
                <div class="placeholder"></div>
            </div>
            <div class="info">
                <h5>Ready, Set, Spike!</h5>
                <h3>Social Media Manager</h3>
                <!-- <div class="type">
                    <h5>Internship</h5>
                    <h5>$15/hour</h5>
                </div> -->
                <div class="location">
                    <location/>
                    <h6>Brooklyn, NY</h6>
                </div>
                <!-- <div class="tags">
                </div> -->
                <p class="date">Posted x days ago</p>
            </div>
            <div class="divider"></div>
            <div class="options">
                <div class="save">
                    <button>Save</button>
                </div>
                <div class="apply">
                    <button>Apply</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.listing {
    width: 100%;
    height: 25vh;
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f4f4;
    margin: 0.5rem;
    padding: 0 3rem;
    transition: box-shadow 0.2s;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    }
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.logo {
    padding-right: 2rem;
    .placeholder {
        background-color: #d9d9d9;
        width: 5rem;
        height: 5rem;
    }
}

.info {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    height: 100%;
    width: 100%;
    // background-color: green;
    
    h5 {
        margin: 0.3rem 0;
    }
    h3 {
        margin: 0.3rem 0;
    }
    .location {
        margin: 0.3rem 0;
    }
    .date {
        margin: 0.3rem 0;
    }
}

// .type {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

.location {
    display: flex;
    justify-content: start;
    align-items: center;

    h6 {
        font-size: 1rem;
        padding-left: 0.5rem;
    }
}

.date {
    font-size: 0.8rem;
}

.divider {
    background-color: #a1a1a1;
    width: 1px;
    height: 80%;
    margin-right: 3rem;
}
.options {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        background-color: #f5f4f4;
        width: 8rem;
        height: 2.4rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
        margin: 0.4rem;
        transition: background-color 0.2s ease-in-out;

        &:hover {
            background-color: skyblue;
        }
    }
    // .save button:hover {
    //     background-color: lightcoral;
    // }
    // .apply button:hover {
    //     background-color: skyblue;
    // }
}
</style>