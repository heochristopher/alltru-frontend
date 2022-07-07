<template>
    <div>
        <navbar/>
        <div id="" class="pb-16 w-auto h-screen mx-8 flex flex-col justify-center items-start sm:mx-16 md:mx-24 lg:mx-32">
            <div id="headings" class="my-4 flex justify-center items-start flex-col space-y-4">
                <h1 id="heading" class="text-5xl font-semibold truncate">Jobs,</h1>
                <h1 id="heading" class="text-5xl font-semibold truncate">Internships,</h1>
                <h1 id="heading" class="text-5xl font-semibold truncate pb-2">Volunteering</h1>
            </div>
            <h2 id="subheading" class="text-xl">Connect with organizations for opportunities to launch your career 🚀</h2>
            <div id="search" class="mt-6 flex justify-center items-center ">
                <nuxt-link to="/listings" id="search" >
                    <button class="rounded-md bg-zinc-900 w-52 h-12 text-white text-md ease-in duration-150 hover:bg-zinc-800">
                         Start Searching
                    </button>
                </nuxt-link>
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