<template>
  <div v-if="alert">
    <div id="error" v-if="alert.status >= 400" class="px-2 py-1 w-2/3 h-10 fixed bottom-8 right-8 z-60 bg-red-100 border border-solid border-red-600 rounded-md flex justify-center items-center">
      <div id="data">
        <h4 id="message" class="text-sm text-red-600 text-center">
          {{ alert.data }}
        </h4>
      </div>
    </div>
    <div id="success" v-if="alert.status < 400" class="px-2 py-1 w-2/3 h-10 fixed bottom-8 right-8 z-60 bg-green-100 border border-solid border-green-600 rounded-md flex justify-center items-center">
      <div id="data">
        <h4 id="message" class="text-sm text-green-600 text-center">
          {{ alert.data }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {
      alert: null,
    }
  },
  watch: {
    '$store.state.alert': function () {
      this.alert = this.$store.state.alert
    },
  },
}
</script>

<style></style>
