<template>
    <div class="mx-4 flex flex-row space-x-2">
        <img :src="user.avatar" class="w-20 h-auto aspect-square overflow-hidden rounded-full" alt="">
        <div class="flex flex-col justify-center">
            <h2 class="text-2xl font-semibold">{{`${user.firstName} ${user.lastName}`}}</h2>
            <h4 class="text-gray-500">{{user.affiliation}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "User",
    props: {
        user: Object
    },
}
</script>