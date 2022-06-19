<template>
    <div id="listing" class="flex justify-center item-start">
        <div id="content">
            <div id="logo">
                <div id="placeholder" class="w-8 h-8"></div>
            </div>
            <div id="info">
                <h5>{{listing.org.affiliation}}</h5>
                <h3>{{listing.position}}</h3>
                <!-- <div id="type">
                    <h5>Internship</h5>
                    <h5>$15/hour</h5>
                </div> -->
                <div id="location">
                    <location :listing="listing"/>
                </div>
                <!-- <div id="tags">
                </div> -->
                <p id="date">Posted x days ago</p>
            </div>
            <div id="divider"></div>
            <div id="options">
                <div id="save">
                    <button>Save</button>
                </div>
                <div id="apply">
                    <button>Apply</button>
                </div>
            </div>
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
.listing {
    width: 100%;
    height: 25vh;
    border-radius: 0.3rem;
    display: flex;
    justify-content: space-between;
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
    width: 28rem;
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
    width: 10rem;
    height: 100%;

    button {
        background-color: #f5f4f4;
        width: 6rem;
        height: 2.4rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
        margin: 0.4rem;
        overflow: visible;
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