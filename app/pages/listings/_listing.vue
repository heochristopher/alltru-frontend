<template>
  <div id="listing-page" class="h-full w-full flex justify-center items-center">
    <navbar />
    <div
      id="content"
      class="bg-white w-11/12 h-auto mt-24 mb-8 px-6 flex flex-col justify-start items-start space-y-4 shadow-md sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3"
    >
      <div
        id="back"
        class="w-full h-12 flex justify-end items-center z-20 border-b border-solid border-zinc-100"
      >
        <NuxtLink to="/listings">
          <div class="flex justify-center items-center space-x-0.5 mr-2">
            <img
              class=""
              src="../../assets/icons/chevron-left.svg"
              alt="left"
            />
            <p class="text-sm font-medium">Back to Listings</p>
          </div>
        </NuxtLink>
      </div>
      <div
        id="info"
        class="bg-purple-100 w-auto h-auto flex flex-col justify-center items-center space-y-4"
      >
        <div
          id="profile"
          class="w-full flex flex-col justify-start items-start space-y-2 sm:flex-row sm:items-end sm:space-x-4"
        >
          <div id="avatar" class="h-36 w-36 sm:h-28 sm:w-28">
            <img :src="listing.org.avatar" alt="logo" class="object-cover" />
          </div>
          <div id="title">
            <h3 class="text-xl">{{ listing.org.affiliation }}</h3>
            <h2 class="text-2xl font-medium sm:text-3xl">
              {{ listing.position }}
            </h2>
          </div>
        </div>
        <div
          id="general"
          class="w-full flex flex-col justify-start items-start space-y-4"
        >
          <div class="flex flex-row justify-center items-start space-x-2">
            <listing-type class="my-auto" :listing="listing" />
            <location class="my-auto" :listing="listing" />
          </div>
          <div
            id="details"
            class="grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-4 sm:grid-rows-1"
          >
            <div id="payment">
              <p class="uppercase text-xs font-medium">Payment</p>
              <h5 class="ml-1 text-lg">Stipend</h5>
            </div>
            <div id="wage">
              <p class="uppercase text-xs font-medium">Stipend / Wage</p>
              <h5 class="ml-1 text-lg">$2000</h5>
            </div>
            <div id="commitment">
              <p class="uppercase text-xs font-medium">Commitment</p>
              <h5 class="ml-1 text-lg">Medium</h5>
            </div>
            <div id="hours">
              <p class="uppercase text-xs font-medium">Hours per Week</p>
              <h5 class="ml-1 text-lg">25hrs/week</h5>
            </div>
          </div>
          <div id="options" class=""></div>
        </div>
      </div>
      <div id="tags"></div>
      <div id="description">
        <p class="text-md">{{ listing.description }}</p>
      </div>
      <div id="apply"></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const id = params.listing
    const listing = await $axios.$get(`/findListing/${id}`)
    return { listing }
  },
}
</script>

<style></style>
