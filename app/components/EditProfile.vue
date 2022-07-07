<template>
    <div class="">
        <button class="rounded-full m-2 p-2 hover:bg-zinc-200 ease-in duration-100 z-40 sm:p-3" @click="toggleModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
        </button>
        <form method="PATCH" @submit.prevent="editProfile" id="" enctype="multipart/form-data" class="fixed inset-0 w-screen h-screen z-50 flex justify-center items-center" v-if="this.$store.state.editModal">
            <div id="overlay" class="absolute inset-0 w-full h-full bg-black opacity-70 -z-10" @click="toggleModal"></div>
            <!-- <div id="close" class="absolute top-6 right-6 -z-20 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div> -->
            <div id="content" class="w-5/6 max-w-3xl h-auto p-6 flex flex-col justify-center items-center z-50 bg-white space-y-4 rounded-md shadow-md">
                <div class="w-full space-y-2 flex flex-col">
                    <label class="text-lg font-medium" for="avatar">Profile Picture</label>
                    <input id="file" type="file" accept="iamge/png, image/jpg, image/jpeg, image/pdf, image/heic" class="w-20 h-auto aspect-square rounded-full" @change="setImage">
                </div>
                <div class="w-full space-y-2">
                    <label class="text-lg font-medium" for="biography">Biography</label>
                    <textarea
                    class="w-full h-36 px-3 py-2 bg-zinc-50 rounded-md border-zinc-200 border-solid border-2 text-sm focus:border-violet-400"
                    id="biography"
                    name="biography"
                    v-model="biography"
                    :placeholder="bioText"
                    />
                </div>
            <div id="socials" class="w-full space-y-2">
                <label class="text-lg font-medium" for="socials">Add Platforms</label>
                <div class="w-full flex flex-col justify-start items-start space-y-2">
                    <div id="linkedin" class="flex flex-row space-x-4">
                        <div class="h-16 w-16 aspect-square">
                            <img src="@/assets/icons/inmark.png" alt="" class="object-cover"/>
                        </div>
                        <form-input
                        type="text"
                        name="linkedIn"
                        v-model="linkedIn"
                        required
                        >
                            Have a LinkedIn account?
                        </form-input>
                    </div>
                    <div id="github" class="flex flex-row space-x-4">
                        <div class="h-16 w-16 aspect-square">
                            <img src="@/assets/icons/github.png" alt="" class="object-cover"/>
                        </div>
                        <form-input
                        type="text"
                        name="github"
                        v-model="github"
                        required
                        >
                            Have a Github account?
                        </form-input>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center w-2/3">
                <form-btn >Confirm Changes</form-btn>
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
            linkedIn: null,
            github: null,
            biography: null,
            birthday: null,
            avatar: null,
            resume: null
        }
    },
    methods: {
        toggleModal() {
            this.$store.dispatch('CHANGE_EDIT_MODAL')
        },
        setImage(e) {
            const image = e.target.files[0]
            this.avatar = image
        },
        async editProfile() {
            try {
                if(this.linkedIn) {
                    if(!this.linkedIn.includes('https://')) {
                        this.linkedIn = 'https://' + this.linkedIn
                    }
                }
                if(this.github) {
                    if(!this.github.includes('https://')) {
                        this.github = 'https://' + this.github
                    }
                }
                if(this.avatar) {
                    console.log(typeof this.avatar)
                    await this.$axios.patch('/profilePic', {
                        image: this.avatar
                    })
                }
                const res = await this.$axios.patch('/editProfile', {
                    biography: this.biography,
                    linkedIn: this.linkedIn,
                    github: this.github
                })
                this.$router.app.refresh()
                this.$store.dispatch('CHANGE_EDIT_MODAL')
                this.$store.dispatch('GET_ALERT', res)
            } catch (error) {
                console.log(error)
            }
        }
    },
    computed: {
        bioText() {
            return this.$store.state.user.role === 'Student' ? 'What would you like organizations to know about you?' : 'What would you like students to know about you?'
        }
    }
}
</script>

<style>

</style>