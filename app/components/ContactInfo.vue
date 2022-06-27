<template>
  <div id="contact" class="flex flex-row h-16 w-1/3 mx-6 mt-4 space-x-6 items-center">
    <a v-if="mail" :href="mail" target="_blank" class="h-full aspect-square">
        <img src="@/assets/icons/gmail.png" alt=""/>
    </a>
    <a v-if="linkedin" :href="linkedin" target="_blank" class="h-full aspect-square">
        <img src="@/assets/icons/inmark.png" alt=""/>
    </a>
    <a v-if="github" :href="github" target="_blank" class="h-full aspect-square">
        <img src="@/assets/icons/github.png" alt=""/>
    </a>
  </div>
</template>

<script>
export default {
    props: {
        github: String,
        mail: String,
        linkedin: String,
    }
}
</script>

<style>

</style>