<template>
  <div v-if="alert">
    <div id="error" v-if="alert.status >= 400">
        <div id="data">
            <h4 id="message">{{alert.data}}</h4>
        </div>
    </div>
    <div id="success" v-if="alert.status < 400">
        <div id="data">
            <h4 id="message">{{alert.data}}</h4>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Alert',
    data() {
        return {
            alert: null
        }
    },
    watch: {
        '$store.state.alert': function() {
        this.alert = this.$store.state.alert
    }
    }
}
</script>

<style>

</style>