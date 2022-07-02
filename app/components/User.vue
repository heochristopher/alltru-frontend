<template>
    <div class="mx-4 flex flex-row space-x-4">
        <img :src="user.avatar" class="w-20 h-auto aspect-square rounded-full" alt="">
        <div class="flex flex-col justify-center">
            <h2 class="text-2xl font-semibold sm:text-3xl overflow-y-hidden ">{{`${user.firstName} ${user.lastName}`}}</h2>
            <h4 class="text-sm text-zinc-600 sm:text-base">{{user.affiliation}}</h4>
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