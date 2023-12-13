<template>
  <div class="m-4">
    <navbar />
    <div class="mt-24 flex flex-col justify-center items-center" id="">
      <h2 class="text-3xl text-center font-semibold truncate h-auto">Create Listing</h2>
      <form method="POST" class="flex flex-col space-y-4 mt-4 w-4/5 max-w-2xl" @submit.prevent="create" v-if="authorized">
        <div class="flex h-12 justify-evenly divide-x items-center text-sm rounded-md border-zinc-300 border-solid border w-full" id="type">
          <toggle v-model="type" value="Volunteer" class="w-1/3">Volunteer</toggle>
          <toggle v-model="type" value="Internship" class="w-1/3">Internship</toggle>
          <toggle v-model="type" value="Job" class="w-1/3">Job</toggle>
        </div>
        <div class="flex h-12 justify-evenly divide-x items-center text-sm rounded-md border-zinc-300 border-solid border w-full" id="remote">
          <toggle v-model="remote" value="true" class="w-1/2">Remote</toggle>
          <toggle v-model="remote" value="false" class="w-1/2">On-Site</toggle>
        </div>
        <form-input id="position" type="text" name="position" v-model="position" required placeholder="Position"></form-input>
        <form-input v-if="remote !== 'true'" id="borough" type="text" name="borough" v-model="location.borough" required placeholder="Borough"></form-input>
        <form-input v-if="remote !== 'true'" id="zip" type="number" name="zip" v-model="location.zip" required placeholder="Zipcode"></form-input>
        <textarea class="block py-2.5 px-2 mt-2.5 w-full text-sm text-zinc-900 bg-transparent rounded-md border border-solid border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-violet-500 peer" id="description" name="description" v-model="description" placeholder="Description, dates, additional information..." />
        <div id="supplementals" class="flex flex-col space-y-4 mt-4 items-center">
          <h3 class="text-2xl text-center font-semibold truncate h-auto">Optional Supplementals</h3>
          <div v-for="e in supplementals" :key="e" id="supplemental" class="">
            <span class="text-md">
              {{ e.prompt }} · <span class="text-md font-semibold">{{ e.input }} </span>
            </span>
            <span class="text-md"> </span>
            <span v-if="e.input === 'Select'" id="select">
              (Options:
              <span v-for="(option, index) in e.options" :key="option" class="text-md">{{ option }}<span class="text-md" v-if="index !== e.options.length - 1">, </span></span>
              )
            </span>
          </div>
          <button type="button" @click="modalOpened = true" class="w-2/5 h-10 text-sm bg-green-400 text-white flex justify-center items-center rounded-md ease-in duration-150 hover:bg-green-500">Add New</button>
        </div>
        <form-btn>Create Listing</form-btn>
      </form>
      <div id="unauthorized" class="">
        <h3 class="text-xl" v-if="!authorized">Sorry, you must be logged in as an organization to view this resource</h3>
      </div>
    </div>
    <div id="modal" v-if="modalOpened" class="py-4 w-1/2 max-w-4xl h-auto flex flex-col justify-between items-start sm:items-center rounded-lg shadow-md space-y-4 sm:flex-row sm:p-4">
      <div class="fixed inset-0 w-screen h-screen z-50 flex justify-center items-center">
        <div id="overlay" class="absolute inset-0 w-full h-full bg-black opacity-70 -z-10" @click="modalOpened = false"></div>
        <form @submit.prevent="addSupp" id="content" class="p-6 w-5/6 max-h-[90vh] overflow-auto max-w-3xl flex flex-col items-center z-50 bg-white rounded shadow-md">
          <h4 class="text-xl font-semibold mb-2">Choose Supplemental</h4>
          <div class="flex h-12 justify-evenly divide-x items-center text-sm rounded-md border-zinc-300 border-solid border w-full mb-4" id="select">
            <toggle v-model="suppType" value="Text" class="w-1/3">Text</toggle>
            <toggle v-model="suppType" value="Select" class="w-1/3">Select</toggle>
            <toggle v-model="suppType" value="File" class="w-1/3">File</toggle>
          </div>
          <h4 v-if="suppType" class="text-xl font-semibold">Add Prompt</h4>
          <form-input v-if="suppType" id="text" type="text" name="text" v-model="prompt" placeholder="Prompt" class="mb-4" required></form-input>
          <h5 v-if="suppType === 'Select'" class="text-lg font-semibold">Add Options</h5>
          <form-input v-if="suppType === 'Select'" id="select-options" type="text" name="select-options" v-model="selectInput" placeholder="Option" class="mb-4"></form-input>
          <div id="if-select" class="w-full flex flex-col justify-center items-center">
            <button v-if="suppType === 'Select'" type="button" @click="setOption" class="w-2/5 h-10 text-sm bg-green-400 text-white flex justify-center items-center rounded-md ease-in duration-150 mb-2 hover:bg-green-500">Add Option</button>
            <ul v-if="suppType === 'Select'" class="mb-4">
              <li v-for="option in selectOptions" :key="option">
                {{ option }}
              </li>
            </ul>
          </div>
          <h4 v-if="suppType === 'File'" id="info" class="text-base mb-4">* File input will accept a .pdf file</h4>
          <div class="flex justify-center items-center space-x-2 mb-4">
            <input v-if="suppType" type="checkbox" name="is-optional" v-model="isOptional" />
            <label class="font-medium" v-if="suppType" for="is-optional">Optional</label>
          </div>
          <button type="submit" class="w-2/5 h-10 text-sm bg-green-400 text-white flex justify-center items-center rounded-md ease-in duration-150 hover:bg-green-500">Add Supplemental</button>
        </form>
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
      modalOpened: false,
      suppType: null,
      prompt: null,
      selectInput: null,
      selectOptions: [],
      supplementals: [],
      isOptional: false,
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
        if (this.supplementals.length > 0) {
          for (let i = 0; i < this.supplementals.length; i++) {
            this.supplementals[i].identifier = i
          }
        }
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
          supplementals: this.supplementals,
        })
        this.$router.push('/dashboard')
        this.$store.dispatch('GET_ALERT', res)
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
    },
    setOption() {
      this.selectOptions.push(this.selectInput)
      this.selectInput = null
    },
    addSupp() {
      if (this.suppType === 'Select' && this.selectOptions.length < 2) {
        this.$store.dispatch('GET_ALERT', {
          data: 'Please add at least 2 options',
          status: 400,
        })
        return
      }
      this.supplementals.push({
        input: this.suppType,
        prompt: this.prompt,
        optional: this.isOptional,
        options: this.suppType === 'Select' ? this.selectOptions : null,
      })
      this.suppType = null
      this.selectInput = null
      this.selectOptions = []
      this.prompt = null
      this.modalOpened = false
      this.isOptional = false
    },
  },
}
</script>

<style>
</style>