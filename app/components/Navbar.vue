<template>
  <div id="nav" class="fixed top-0 left-0 w-full h-20 bg-white shadow-md z-50">
    <div id="content" class="w-full h-full flex justify-between items-center">
      <h1 class="text-3xl ml-10 font-medium truncate"><NuxtLink to="/">Alltru</NuxtLink></h1>
      <div id="links" class="flex justify-center items-center mr-10 space-x-8">
        <NuxtLink to="/register" class="text-md">For Students</NuxtLink>
        <NuxtLink to="/register" class="text-md">For Organizations</NuxtLink>
        <NuxtLink to="/login"
          ><div
            class="w-20 h-10 rounded-md bg-zinc-900 flex justify-center items-center"
          >
            <p class="text-md text-white">Login</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script></script>
