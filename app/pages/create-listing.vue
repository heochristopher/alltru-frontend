<template>
  <div class="m-4">
    <navbar />
    <div class="mt-20 flex flex-col justify-center items-center" id="">
      <h2 class="text-3xl text-center font-semibold truncate h-auto">Create Listing</h2>
      <form method="POST" class="flex flex-col space-y-4 mt-4 w-4/5 md:w-1/2" @submit.prevent="create" v-if="authorized">
        <div class="flex h-12 justify-evenly divide-x items-center text-sm bg-zinc-100 rounded-md border-zinc-300 border-solid border w-full" id="type">
          <toggle v-model="type" value="Volunteer" class="w-1/3">Volunteer</toggle>
          <toggle v-model="type" value="Internship" class="w-1/3">Internship</toggle>
          <toggle v-model="type" value="Job" class="w-1/3">Job</toggle>
        </div>
        <div class="flex h-12 justify-evenly divide-x items-center text-sm bg-zinc-100 rounded-md border-zinc-300 border-solid border w-full" id="remote">
          <toggle v-model="remote" value="true" class="w-1/2">Remote</toggle>
          <toggle v-model="remote" value="false" class="w-1/2">On-Site</toggle>
        </div>
        <form-input id="position" type="text" name="position" v-model="position" required>Position</form-input>
        <form-input v-if="remote !== 'true'" id="borough" type="text" name="borough" v-model="location.borough" required>Borough</form-input>
        <form-input v-if="remote !== 'true'" id="zip" type="number" name="zip" v-model="location.zip" required>Zipcode</form-input>
        <textarea class="block py-2.5 px-2 mt-2.5 w-full text-sm text-zinc-900 bg-transparent rounded-md border border-solid border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-violet-500 peer" id="description" name="description" v-model="description" placeholder="Description, additional information, questions..." />
        <form-btn>Create Listing</form-btn>
      </form>
      <div id="unauthorized" class="">
        <h3 class="text-xl" v-if="!authorized">Sorry, you must be logged in as an organization to view this resource</h3>
      </div>
    </div>
    <alert />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      position: null,
      type: null,
      remote: null,
      location: {
        borough: null,
        zip: null,
      },
      description: null,
      tags: null,
      user: this.$store.state.user,
    }
  },
  computed: {
    authorized() {
      if (!this.user) {
        return false
      } else if (this.user.role === 'Student') {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    async create() {
      try {
        const res = await this.$axios.$post('/listing', {
          position: this.position,
          type: this.type,
          remote: this.remote === 'true' ? true : false,
          location:
            this.remote === 'true'
              ? null
              : {
                  borough: this.borough,
                  zip: this.zip,
                },
          description: this.description,
          tags: [],
        })
        this.$router.push('/dashboard')
        this.$store.dispatch('GET_ALERT', res)
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
  },
}
</script>

<style>
</style>