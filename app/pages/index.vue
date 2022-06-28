<template>
    <div>
        <navbar/>
        <div id="" class="mt-24 mx-8">
            <div id="headings" class="my-4 flex flex-col space-y-4">
                <h1 id="heading" class="text-6xl font-semibold truncate">Jobs</h1>
                <h1 id="heading" class="text-6xl font-semibold truncate">Intership</h1>
                <h1 id="heading" class="text-6xl font-semibold truncate">Volunteer</h1>
            </div>
            <h2 id="subheading" class="text-xl">Connnect with organizations for opportunities to launch your career 🚀</h2>
            <div id="search" class="mt-8 rounded-md bg-zinc-900 flex justify-center items-center ease-in duration-100 hover:bg-zinc-800 w-56 py-2">
                <nuxt-link to="/listings" id="search" class="text-white text-2xl m-auto">Start searching</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>