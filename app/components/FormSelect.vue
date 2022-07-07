<template>
    <div class="">
        <label for="selector" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Reason for Email</label>
        <select id="selector" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option selected="">Choose the most related topic.</option>
        <option value="Ac">Account Information</option>
        <option value="Sh">Shipping Problem</option>
        <option value="Us">Issue With User</option>
        <option value="Po">Posts Not Working</option>
        <option value="Ot">Other</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "FormSelect"
}
</script>