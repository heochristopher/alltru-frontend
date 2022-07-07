<template>
    <div id="org">
        <div id="">
            <navbar/>
            <div class="w-full h-auto mt-28 flex flex-col justify-center items-center space-y-6 pb-8">
                <div id="user-info" class="w-11/12 max-w-4xl h-auto flex justify-between items-start rounded-lg shadow-md sm:p-4">
                    <div class="flex flex-col justify-start items-start space-y-4">
                        <user :user="org" class=""/>
                        <div id="bio" class="w-5/6 mx-4">
                            <p class="text-zinc-600 text-sm sm:text-base">{{org.biography}}</p>
                        </div>
                        <contact-info 
                        :mail="org.email"
                        :github="org.contact.github"
                        :linkedin="org.contact.linkedIn"
                        />
                    </div>
                </div>
                <div id="listings" class="w-11/12 max-w-4xl mb-4 h-auto flex flex-col justify-start items-start rounded-lg shadow-md p-4 sm:py-4 sm:px-8">
                  <h3 class="text-xl font-semibold">{{`${org.affiliation}'s listings`}}</h3>
                    <div class="w-full mt-4">
                    <div class="w-full flex flex-col justify-center items-center">
                    <listing
                      v-for="listing in listings"
                      :key="listing._id"
                      :listing="listing"
                      :isSaved="(!user) ? null : user.savedListings.includes(listing._id)"
                    />
                    </div>
                </div>
                </div>
        
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({$axios, params, store}) {
        const id = params.org
        try {
            const org = await $axios.$get(`/sendOther/${id}`)
            const listings = await $axios.$get(`/orgListings/${id}`)
            if(store.state.user && store.state.user.role === 'Student') {
                const user = await $axios.$get('/sendUser')
                console.log(user)
                return {user, org, listings}
            }
            return {org, listings}
        } catch (error) {
            console.log(error)
        }
  },
}
</script>

<style>

</style>