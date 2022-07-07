<template>
    <div class="relative z-0 w-full group overflow-visible">
        <!-- <label for="selector" class="block mb-2 text-sm font-medium text-zinc-900 ">Reason for Email</label> -->
        <select id="selector" class="w-full border border-zinc-200 text-zinc-500 text-sm rounded-md focus:ring-sky-500 focus:border-sky-500 block py-2.5 px-2 mt-2.5 " 
        :name="name"
        :type="type"
        :value="value"
        >
            <slot></slot>
        </select>
    </div>
</template>

<script>
export default {
    name: "FormSelect"
}
</script>