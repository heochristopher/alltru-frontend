<template>
    <div>
        <navbar/>
        <div id="" class="pb-16 w-auto h-screen mx-8 flex flex-col justify-center items-start sm:mx-16 md:mx-24 lg:mx-32">
            <div id="headings" class="my-4 flex justify-center items-start flex-col space-y-4">
                <h1 id="heading" class="text-6xl font-semibold truncate">Jobs,</h1>
                <h1 id="heading" class="text-6xl font-semibold truncate">Internships,</h1>
                <h1 id="heading" class="text-6xl font-semibold truncate pb-2">Volunteering</h1>
            </div>
            <h2 id="subheading" class="text-xl">Connect with organizations for opportunities to launch your career 🚀</h2>
            <div id="search" class="mt-6 rounded-md bg-zinc-900 flex justify-center items-center ease-in duration-100 hover:bg-zinc-800 w-52 h-12">
                <nuxt-link to="/listings" id="search" class="text-white text-xl m-auto">Start Searching</nuxt-link>
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