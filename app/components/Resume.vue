<template>
  <div id="resume" class="py-4 w-11/12 max-w-4xl h-auto flex justify-between items-center rounded-lg shadow-md sm:p-4">
    <h2 class="text-2xl font-semibold mx-4">Resume</h2>
    <div class="space-x-6 mr-2 hidden sm:flex">
      <button v-if="resume" @click="toggleResume" id="" class="flex justify-center items-center space-x-2 hover:text-zinc-600">
        <img src="@/assets/icons/external-link.svg" alt="" class="" />
        <p>View</p>
      </button>
      <a v-if="resume" id="" target="_blank" :href="`https://docs.google.com/viewerng/viewer?url=${resume}`" class="flex justify-center items-center space-x-2 hover:text-zinc-600">
        <img src="@/assets/icons/download.svg" alt="" class="" />
        <p>Download</p>
      </a>
      <label for="resume-input" id="" class="flex justify-center items-center hover:text-zinc-600">
        <input id="resume-input" type="file" enctype="multipart/form-data" accept="application/pdf" class="hidden" @change="setImage" />
        <img src="@/assets/icons/upload-cloud.svg" alt="" class="mr-2" />
        <p>Upload</p>
      </label>
      <button v-if="resume" @click="deleteResume" id="" class="flex justify-center items-center space-x-2 hover:text-red-300">
        <img src="@/assets/icons/trash.svg" alt="" class="" />
        <p class="text-red-500">Delete</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resume: String,
  },
  data() {
    return {
      showOptions: false,
    }
  },
  methods: {},
}
</script>
