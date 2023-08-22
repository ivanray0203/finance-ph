<script setup>
definePageMeta({
  layout: "authenticated",
});
</script>
<template>
  <div class="h-screen flex items-center justify-center flex-col gap-12">
    <h1 class="text-[#dd6e42] font-semibold text-6xl">
      ASK <span class="text-black">FINANCEPH</span>
    </h1>
    <div class="relative w-9/12">
      <input
        type="search"
        id="default-search"
        class="block w-full p-4 pl-10 text-sm text-gray-900 border-2 border-black rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="FinancePH Seminars"
        required
      />
      <div
        class="absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <button type="submit">
          <Icon name="tabler:x" size="24" />
        </button>
        |
        <button type="submit">
          <Icon name="tabler:search" size="24" />
        </button>
      </div>
    </div>
  </div>
</template>
