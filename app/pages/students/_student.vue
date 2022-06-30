<template>
    <div id="student">
            <navbar/>
            <div class="mt-24">
                <user :user="student"/>
                <contact-info 
                :mail="student.email"
                :github="student.contact.github"
                :linkedin="student.contact.linkedIn"
                />
                <biography :bio="student.biography"/>
            </div>
            <alert/>
        </div>
</template>

<script>
export default {
    async asyncData({$axios, params}) {
        const id = params.student
        try {
            const student = await $axios.$get(`/sendOther/${id}`)
            return {student}
        } catch (error) {
            console.log(error)
        }
  },
}
</script>

<style>

</style>