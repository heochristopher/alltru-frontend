<template>
    <div id="student" class="">
        <div id="">
            <navbar/>
            <div class="w-full h-auto mt-28 flex flex-col justify-center items-center space-y-6 pb-8">
                <div id="user-info" class="w-11/12 max-w-4xl h-auto flex justify-between items-start rounded-lg shadow-md sm:p-4">
                    <div class="flex flex-col justify-start items-start space-y-4">
                        <user :user="user" class="w-5/6 sm:w-full"/>
                        <div v-if="user.biography" id="bio" class="w-5/6 mx-4">
                            <p class="text-zinc-600 text-sm sm:text-base">{{user.biography}}</p>
                        </div>
                        <contact-info 
                        :mail="user.email"
                        :github="user.contact.github"
                        :linkedin="user.contact.linkedIn"
                        />
                    </div>
                </div>
                    <resume :resume="user.resume"/>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    async asyncData({$axios, params}) {
        const id = params.student
        try {
            const user = await $axios.$get(`/sendOther/${id}`)
            return {user}
        } catch (error) {
            console.log(error)
        }
  },
}
</script>

<style>

</style>