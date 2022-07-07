<template>
    <div class="w-11/12 max-w-4xl h-auto flex justify-between items-start rounded-lg shadow-md sm:p-4">
        <h2 class="text-2xl font-semibold">Resume</h2>
        <div >
            <button class="bg-grey p-2" v-if="resume" @click="toggleModal">View Resume</button>
            <div class="fixed inset-0 w-screen h-screen z-50 flex justify-center items-center" v-if="this.$store.state.resumeModal">
                <div id="overlay" class="absolute inset-0 w-full h-full bg-black opacity-70 -z-10" @click="toggleModal"></div>
                <div id="content" class="w-5/6 max-w-3xl h-3/5 p-6 flex flex-col justify-center items-center z-50 bg-white space-y-4 rounded-md shadow-md">
                    <div class="w-full h-full">
                        <iframe :src="`http://docs.google.com/gview?url=${resume}&embedded=true`" frameborder="0" class="h-full"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        resume: String
    },
    methods: {
        toggleModal() {
            this.$store.dispatch('CHANGE_RESUME_MODAL')
        },
        setImage(e) {
            const image = e.target.files
            this.avatar = image
        },
        async editProfile() {
            try {
                // if(this.linkedIn) {
                //     if(!this.linkedIn.includes('https://')) {
                //         this.linkedIn = 'https://' + this.linkedIn
                //     }
                // }
                // if(this.github) {
                //     if(!this.github.includes('https://')) {
                //         this.github = 'https://' + this.github
                //     }
                // }
                // const res = await this.$axios.patch('/editProfile', {
                //     biography: this.biography,
                //     linkedIn: this.linkedIn,
                //     github: this.github
                // })
                // this.$router.app.refresh()
                // this.$store.dispatch('CHANGE_MODAL')
                // this.$store.dispatch('GET_ALERT', res)
            } catch (error) {
                console.log(error)
            }
        }
    },
}
</script>