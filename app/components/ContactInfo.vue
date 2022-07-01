<template>
  <div id="contact" class="flex flex-row h-12 mx-5 space-x-6 justify-start items-center">
    <a v-if="mail" :href="`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${mail}`" target="_blank" class="w-8 aspect-square">
        <img src="@/assets/icons/gmail.png" alt=""/>
    </a>
    <a v-if="linkedin" :href="linkedin" target="_blank" class="w-8 aspect-square">
        <img src="@/assets/icons/inmark.png" alt=""/>
    </a>
    <a v-if="github" :href="github" target="_blank" class="w-8 aspect-square">
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