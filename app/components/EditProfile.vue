<template>
    <div class="">
        <button class="fixed right-2 rounded-full p-2 hover:bg-gray-300 ease-in duration-75" @click="formOpen = !formOpen">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
        </button>
        <form method="POST" @submit="editProfile" id="" class="" v-if="formOpen">
            <form-input
             id="affiliation"
             type="text"
             name="affiliation"
             v-model="affiliation"
             :placeholder="affiliationText"
             :value="user.affiliation"
            />
            <textarea
            class="w-full h-36 px-3 py-2 bg-zinc-100 rounded-md border-zinc-300 border-solid border"
            id="biography"
            name="biography"
            v-model="biography"
            :placeholder="bioText"
            />
          <div id="" class="">
            <h3>Add socials</h3>
            <div id="" class="flex flex-row h-16 w-1/3 mx-6 mt-4 space-x-6 items-center">
                <div id="linkedin">
                    <button class="h-full aspect-square" @click="linkedinOpen = true">
                        <img src="@/assets/icons/inmark.png" alt=""/>
                    </button>
                    <form-input v-if="linkedinOpen"
                    id="linkedIn"
                    type="text"
                    name="linkedIn"
                    v-model="linkedIn"
                    placeholder="Have a LinkedIn account?"
                    />
                </div>
                <div id="github">
                    <button class="h-full aspect-square" @click="githubOpen = true">
                        <img src="@/assets/icons/github.png" alt=""/>
                    </button>
                    <form-input v-if="githubOpen"
                    id="github"
                    type="text"
                    name="github"
                    v-model="github"
                    placeholder="Have a GitHub account?"
                    />
                </div>
            </div>
          </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: this.$store.state.user,
            formOpen: false,
            linkedinOpen: false,
            githubOpen: false,
            affiliation: null,
            linkedIn: null,
            github: null,
            biography: null,
            birthday: null,
        }
    },
    computed: {
        affiliationText() {
            return this.$store.state.user.role === 'Student' ? 'School' : 'Organization'
        },
        bioText() {
            return this.$store.state.user.role === 'Student' ? 'What would you like organizations to know about you?' : 'What would you like students to know about you?'
        }
    }
}
</script>

<style>

</style>