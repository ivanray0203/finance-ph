<script setup>
const emit = defineEmits(["closeModalHandler"]);

const openModalHandler = () => {
  emit("closeModalHandler");
};
</script>
<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div class="relative bg-white w-1/4 rounded-lg shadow dark:bg-gray-700">
      <!-- Modal header -->
      <div class="p-4 rounded-t text-center">
        <button
          @click="openModalHandler"
          type="button"
          class="absolute right-1 top-1 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="defaultModal"
        >
          <Icon name="tabler:circle-x" size="32" />
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-4">
        <slot />
      </div>
    </div>
  </div>
</template>
