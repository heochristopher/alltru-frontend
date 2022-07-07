<template>
  <div>
    <div class="fixed top-0 left-0 w-full h-20 bg-white shadow-md z-40">
      <div id="content" class="w-full h-full flex justify-between items-center">
        <h1 class="text-3xl ml-10 font-medium truncate z-50">
          <NuxtLink to="/listings">Alltru</NuxtLink>
        </h1>
        <div
          id="links"
          class="hidden justify-center items-center mr-10 space-x-10 sm:flex"
          v-if="!user"
        >
          <NuxtLink
            to="/register"
            class="text-base text-zinc-900 ease-in duration-100 hover:text-zinc-800"
            >For Students</NuxtLink
          >
          <NuxtLink
            to="/register"
            class="text-base text-zinc-900 ease-in duration-100 hover:text-zinc-800"
            >For Organizations</NuxtLink
          >
          <NuxtLink to="/login"
            ><div
              class="w-20 h-10 rounded-md bg-zinc-900 flex justify-center items-center ease-in duration-100 hover:bg-zinc-800"
            >
              <p class="text-base text-white">Login</p>
            </div>
          </NuxtLink>
        </div>
          <div class="flex flex-row" v-else>
            <div
            id="links"
            class="hidden justify-center items-center mr-10 space-x-10 sm:flex"
          >
            <NuxtLink
              to="/listings"
              class="text-base text-zinc-900 ease-in duration-100 hover:text-zinc-800"
              >Listings</NuxtLink
            >
            <NuxtLink
              to="/create-listing" v-if="user.role === 'Organization'"
              class="text-base text-zinc-900 ease-in duration-100 hover:text-zinc-800"
              >Create Listing</NuxtLink
            >
            <NuxtLink
              to="/dashboard"
              class="text-base text-zinc-900 ease-in duration-100 hover:text-zinc-800"
              >Dashboard</NuxtLink
            >
    
            <!-- <NuxtLink to="/create-listing" v-if="user.role === 'Organization'"
            ><div
              class="px-3 py-2 rounded-md bg-zinc-900 flex justify-center items-center ease-in duration-100 hover:bg-zinc-800"
            >
              <p class="text-base text-white">Create Listing</p>
            </div>
          </NuxtLink> -->
          </div>
            <nav-profile class="mr-10 cursor-pointer"/>
        </div>
        <div
          @click="burger = !burger"
          id="burger"
          class="flex justify-center items-center mr-10 cursor-pointer sm:hidden z-40"
          v-if="!user"
        >
          <img v-if="!burger" src="@/assets/icons/menu.svg" alt="menu" />
          <img v-if="burger" src="@/assets/icons/close.svg" alt="close" />
        </div>
      </div>
    </div>
    <div
      v-if="burger"
      id="menu-content"
      class="fixed top-0 left-0 w-full h-auto bg-white shadow-md flex flex-col justify-center items-end  space-y-4 pt-24 pb-6 sm:hidden"
    >
      <NuxtLink
        to="/register"
        class="mr-10 text-lg text-zinc-900 ease-in duration-100 hover:text-zinc-800"
        @click="console.log('asdf')"
        >For Students</NuxtLink
      >
      <NuxtLink
        to="/register"
        class="mr-10 text-lg text-zinc-900 ease-in duration-100 hover:text-zinc-800"
        >For Organizations</NuxtLink
      >
      <NuxtLink
        to="/login"
        class="mr-10 text-lg text-zinc-900 ease-in duration-100 hover:text-zinc-800"
        >Login</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      burger: false,
      user: this.$store.state.user
    }
  },
  created() {
    this.burger = false
  },
  methods: {
  },
}
</script>
