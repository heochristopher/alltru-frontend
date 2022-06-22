<template>
    <div class="flex flex-row justify-center item-start rounded-md shadow-lg m-2">
        <div class="w-5/6  m-6" id="content">
            <div id="org" class="flex">
                <div class="w-1/6 h-1/6 mr-2">
                    <img class="object-contain" :src="listing.org.avatar" alt="">
                </div>
                <div>
                    <h6>{{listing.org.affiliation}}</h6>
                    <h4>{{listing.position}}</h4> 
                </div>
            </div>
            <div id="info" class="flex flex-row mt-3 space-x-4 content-center">
                <location class="my-auto" :listing="listing"/>
                <ListingType class="my-auto" :listing="listing"/>
            </div>
            <p class="text-gray-500 text-sm mt-2" id="date">Posted x days ago</p>
        </div>
        <div class="space-y-10 text-center m-auto mr-2" id="options">
            <button class="">Save</button>
            <button class="bg-sky-300 hover:bg-sky-500 w-full rounded-sm h-8">Apply</button>
        </div>
    </div>
</template>

<script>
import ListingType from './ListingType.vue';
export default {
    props: {
        listing: Object
    },
    components: { ListingType }
}
</script>

<style lang="scss" scoped>
// .listing {
//     width: 100%;
//     height: 25vh;
//     border-radius: 0.3rem;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background-color: #f5f4f4;
//     margin: 0.5rem;
//     padding: 0 3rem;
//     transition: box-shadow 0.2s;

//     &:hover {
//         box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
//     }
// }

// .content {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100%;
// }

// .logo {
//     padding-right: 2rem;
//     .placeholder {
//         background-color: #d9d9d9;
//         width: 5rem;
//         height: 5rem;
//     }
// }

// .info {
//     padding: 0 2rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: start;
//     height: 100%;
//     width: 28rem;
//     // background-color: green;
    
//     h5 {
//         margin: 0.3rem 0;
//     }
//     h3 {
//         margin: 0.3rem 0;
//     }
//     .location {
//         margin: 0.3rem 0;
//     }
//     .date {
//         margin: 0.3rem 0;
//     }
// }

// // .type {
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// // }


// .date {
//     font-size: 0.8rem;
// }

// .divider {
//     background-color: #a1a1a1;
//     width: 1px;
//     height: 80%;
//     margin-right: 3rem;
// }
// .options {
//     display: flex; 
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 10rem;
//     height: 100%;

//     button {
//         background-color: #f5f4f4;
//         width: 6rem;
//         height: 2.4rem;
//         border-radius: 0.5rem;
//         border: none;
//         cursor: pointer;
//         margin: 0.4rem;
//         overflow: visible;
//         transition: background-color 0.2s ease-in-out;

//         &:hover {
//             background-color: skyblue;
//         }
//     }
//     // .save button:hover {
//     //     background-color: lightcoral;
//     // }
//     // .apply button:hover {
//     //     background-color: skyblue;
//     // }
// }
</style>