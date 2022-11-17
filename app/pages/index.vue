<template>
  <div>
    <navbar />
    <div id="" class="mt-32 pb-16 mx-8 flex flex-col space-y-8 justify-center items-start sm:mx-16 md:mx-24 lg:mx-32">
      <div id="splash" class="flex flex-col space-y-8 justify-center items-start">
        <div id="headings" class="flex justify-center items-start flex-col space-y-4">
          <h1 id="heading" class="text-5xl font-semibold truncate sm:text-6xl">Jobs</h1>
          <h1 id="heading" class="text-5xl font-semibold truncate sm:text-6xl">Internships</h1>
          <h1 id="heading" class="text-5xl font-semibold truncate pb-2 sm:text-6xl">Volunteering</h1>
        </div>
        <!-- <h1 id="heading" class="text-4xl font-semibold py-2">Everyone can have an impact, no matter their age</h1> -->
        <div id="search" class="mt-6 flex flex-col space-y-8">
          <h2 id="subheading" class="text-2xl sm:text-3xl sm:pb-2">Everyone can have an impact, no matter their age.</h2>
          <h2 id="subheading" class="text-2xl sm:text-3xl sm:pb-2"><span id="users" class="font-semibold text-emerald-600">217</span> users, <span class="font-semibold text-green-600" id="connections">23</span> connections and counting!</h2>
          <nuxt-link to="/listings" id="search">
            <button class="rounded-md bg-zinc-900 w-52 h-12 text-white text-md ease-in duration-150 hover:bg-zinc-700">Start Searching</button>
          </nuxt-link>
        </div>
        <h2 id="subheading" class="text-xl mt-4">Join the <span class="font-semibold">only</span> platform specializing in opportunities for high school students</h2>
      </div>
      <div id="border" class="w-full border-t border-solid border-zinc-200"></div>
      <div id="proposition" class="flex flex-col w-full space-y-8 items-center xl:flex-row xl:justify-between xl:space-y-0">
        <div id="student" class="flex flex-col space-y-2">
          <h3 id="" class="text-xl truncate sm:text-2xl">Students — through Alltru you can</h3>
          <ul class="" id="">
            <li id="" class="flex space-x-4 items-center">
              <h4 class="text-3xl pr-2 overflow-hidden sm:text-4xl" id="">🥱</h4>
              <h4 id="" class="sm:text-lg md:text-xl">Send your profile to recruiters with just <span class="font-semibold">one</span> click</h4>
            </li>
            <li id="" class="flex space-x-4 items-center">
              <h4 class="text-3xl pr-2 overflow-hidden sm:text-4xl" id="">🤲</h4>
              <h4 id="" class="sm:text-lg md:text-xl">Volunteer for causes you are <span class="font-semibold">passionate</span> about</h4>
            </li>
            <li id="" class="flex space-x-4 items-center">
              <h4 class="text-3xl pr-2 overflow-hidden sm:text-4xl" id="">💼</h4>
              <h4 id="" class="sm:text-lg md:text-xl">Secure real-world <span class="font-semibold">experience</span> through internships</h4>
            </li>
            <li id="" class="flex space-x-4 items-center">
              <h4 class="text-3xl pr-2 overflow-hidden sm:text-4xl" id="">🤝</h4>
              <h4 id="" class="sm:text-lg md:text-xl">Establish <span class="font-semibold">connections</span> with potential employers</h4>
            </li>
          </ul>
          <div id="actions" class="flex flex-row space-x-4">
            <nuxt-link to="/listings" class="rounded-md w-1/2 h-12 mt-4 text-black text-md ease-in duration-150 border-2 flex text-center justify-center items-center hover:bg-zinc-200">Search listings</nuxt-link>
            <button @click="route('Student')" class="rounded-md bg-zinc-900 w-1/2 h-12 mt-4 text-white text-md ease-in duration-150 hover:bg-zinc-700">Join now</button>
          </div>
        </div>
        <div id="border" class="w-full border-t border-solid border-zinc-200 xl:hidden"></div>
        <div id="org" class="flex flex-col space-y-2">
          <h3 id="" class="text-xl sm:text-2xl">Recruiters — Alltru can help you</h3>
          <ul class="" id="">
            <li id="" class="flex space-x-4 items-center">
              <h4 class="text-3xl pr-2 overflow-hidden sm:text-4xl" id="">🔍</h4>
              <h4 id="" class="sm:text-lg md:text-xl">Search for <span class="font-semibold">talented</span> and <span class="font-semibold">eager</span> students</h4>
            </li>
            <li id="" class="flex space-x-4 items-center">
              <h4 class="text-3xl pr-2 overflow-hidden sm:text-4xl" id="">✈️</h4>
              <h4 id="" class="sm:text-lg md:text-xl"><span class="font-semibold">Streamline</span> applications for vacant positions</h4>
            </li>
            <li id="" class="flex space-x-4 items-center">
              <h4 class="text-3xl pr-2 overflow-hidden sm:text-4xl" id="">🔗</h4>
              <h4 id="" class="sm:text-lg md:text-xl">Connect with applicants that <span class="font-semibold">catch your eye</span></h4>
            </li>
            <li id="" class="flex space-x-4 items-center">
              <h4 class="text-3xl pr-2 overflow-hidden sm:text-4xl" id="">🚀</h4>
              <h4 id="" class="sm:text-lg md:text-xl">Kickstart your organization's <span class="font-semibold">recruitment</span> process</h4>
            </li>
          </ul>
          <div id="actions" class="flex flex-row space-x-4">
            <nuxt-link to="/listings" class="rounded-md w-1/2 h-12 mt-4 text-black text-md ease-in duration-150 border-2 flex text-center justify-center items-center hover:bg-zinc-200">Search listings</nuxt-link>
            <button @click="route('Org')" class="rounded-md bg-zinc-900 w-1/2 h-12 mt-4 text-white text-md ease-in duration-150 hover:bg-zinc-700">Join now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CountUp } from 'countup.js'

export default {
  middleware: 'redirect',
  mounted() {
    let users = new CountUp('users', 217, 0)
    if (!users.error) {
      users.start()
    } else {
      console.error(users.error)
    }
    let connections = new CountUp('connections', 23, 0)
    if (!connections.error) {
      connections.start()
    } else {
      console.error(connections.error)
    }
  },
  methods: {
    route(type) {
      this.$store.dispatch('REGISTER_TYPE', type)
      this.$router.push('/register')
    },
  },
}
</script>

<style>
</style>