<template>
    <div class="">
        <div v-if="listing.type === 'Volunteer'" class="uppercase  p-0.5 rounded bg-blue-500">
            <p class="text-white text-xs">Volunteer</p>
        </div>
        <div v-else-if="listing.type === 'Internship'" class="uppercase p-0.5 rounded bg-violet-600">
            <p class="text-white text-xs">Internship</p>
        </div>
        <div v-else class="uppercase p-0.5 rounded bg-green-700">
            <p class="text-white text-xs my-auto">Job</p>
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
