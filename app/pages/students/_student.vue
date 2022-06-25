<template>
  <div class="">
    <user :user="student"/>
  </div>
</template>

<script>
export default {
    async asyncData({$axios, params}) {
        const id = params.student
        try {
            const student = await $axios.$get(`/findStudent/${id}`)
            return {student}
        } catch (error) {
            console.log(error)
        }
  },
}
</script>

<style>

</style>