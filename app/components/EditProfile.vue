<template>
    <div class="">
        <button class="absolute right-2 rounded-full p-3 hover:bg-zinc-200 ease-in duration-100" @click="toggleModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
        </button>
        <form method="POST" @submit="editProfile" id="" class="fixed inset-0 w-screen h-screen z-50 flex justify-center items-center" v-if="this.$store.state.modal"> 
        <div id="overlay" class="absolute inset-0 w-full h-full bg-black opacity-70 z-40" @click="toggleModal"></div>
        <div id="content" class="w-5/6 h-auto p-6 flex flex-col justify-center items-center z-50 bg-white space-y-4 rounded-md shadow-md">
            <div class="w-full space-y-2">
                <label for="affiliation">School</label>
                <form-input
                id="affiliation"
                type="text"
                name="affiliation"
                v-model="affiliation"
                :placeholder="affiliationText"
                :value="user.affiliation"
                />
            </div>
            <div class="w-full space-y-2">
                <label for="biography">Biography</label>
                <textarea
                class="w-full h-36 px-3 py-2 bg-zinc-100 rounded-md border-zinc-300 border-solid border text-sm"
                id="biography"
                name="biography"
                v-model="biography"
                :placeholder="bioText"
                />
            </div>
          <div id="socials" class="w-full space-y-2">
            <label for="socials">Add Platforms</label>
            <div class="w-full flex justify-start items-start space-x-6">
                <div id="linkedin">
                    <div class="h-16 w-16 aspect-square ml-2" @click="linkedinOpen = true">
                        <img src="@/assets/icons/inmark.png" alt="" class="object-cover"/>
                    </div>
                    <form-input v-if="linkedinOpen"
                    id="linkedIn"
                    type="text"
                    name="linkedIn"
                    v-model="linkedIn"
                    placeholder="Have a LinkedIn account?"
                    />
                </div>
                <div id="github">
                    <div class="h-16 w-16 aspect-square" @click="githubOpen = true">
                        <img src="@/assets/icons/github.png" alt="" class="object-cover"/>
                    </div>
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
          <div class="flex justify-center items-center w-2/3">
<form-btn>Confirm Changes</form-btn>
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
    methods: {
        toggleModal() {
            this.$store.dispatch('CHANGE_MODAL')
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