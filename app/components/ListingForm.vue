<template>
  <div class="">
    <form method="POST" @submit.prevent="">
        <form-input
        id="position"
        type="text"
        name="position"
        v-model="position"
        placeholder="Position"
        required
        />
        <div class="" id="type">
            <search-toggle
            v-model="type" value="Volunteer"
            >Volunteer</search-toggle>
            <search-toggle
            v-model="type" value="Internship"
            >Internship</search-toggle>
            <search-toggle
            v-model="type" value="Job"
            >Job</search-toggle>
        </div>
        <div class="" id="remote">
            <search-toggle
            v-model="remote" value="true"
            >Remote</search-toggle>
            <search-toggle
            v-model="remote" value="false"
            >On-Site</search-toggle>
        </div>
        <form-input
        id="borough"
        type="text"
        name="borough"
        v-model="location.borough"
        placeholder="Borough"
        required
        />
        <form-input
        id="zip"
        type="number"
        name="zip"
        v-model="location.zip"
        placeholder="Zipcode"
        required
        />
        <form-input
        id="description"
        type="textarea"
        name="description"
        v-model="description"
        placeholder="Description, questions, additional information..."
        required
        />
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            position: null,
            type: null,
            remote: null,
            location: {
                borough: null,
                zip: null
            },
            description: null,
            tags: null
        }
    },
    methods: {
        async create() {
            try {
                await this.$axios.$post('/listing', {
                })
            } catch (error) {
                this.$store.dispatch('GET_ALERT', error)
            }
        }
    }
}
</script>

<style>

</style>