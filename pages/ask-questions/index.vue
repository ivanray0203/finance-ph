<script setup>
definePageMeta({
  layout: "guest",
});

const openModal = ref(false);

const openModalHandler = () => (openModal.value = true);

const closeModalHandler = () => {
  openModal.value = false;
};
</script>
<template>
  <div class="px-40 py-4">
    <form class="w-full">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border-2 border-black rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Find your questions here..."
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
    </form>
    <div class="flex flex-col gap-4">
      <p class="text-[#ff3823]">
        * If your question is not listed above, click the proceed button below
        to continue adding your question.
      </p>
      <div>
        <button
          @click="openModalHandler"
          class="bg-[#dd6e42] text-white py-2 px-4 rounded-lg"
        >
          Proceed
        </button>
      </div>
    </div>

    <TheAskQuestionModal
      v-if="openModal"
      @closeModalHandler="closeModalHandler"
    >
      <div class="flex flex-col gap-2">
        <div class="bg-[#c0d6df] p-2">
          <h1 class="font-semibold">Tips for getting good answers:</h1>
          <ul class="list-disc ml-4 text-sm">
            <li>Keep your question short and to the point</li>
            <li>Double-check grammar and spelling</li>
          </ul>
        </div>
        <quill-editor theme="snow" />

        <input type="file" class="border border-gray-300 rounded-lg p-1.5" />
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="category"
          >
            Select Category
          </label>
          <select
            class="shadow appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Select Category"
          >
            <option>Select Category</option>
            <option>Category 1</option>
          </select>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="remember" class="dark:text-gray-300 text-sm"
                >I agree to send an email to all advisors of FinancePH asking
                this question.
              </label>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="remember" class="dark:text-gray-300 text-sm"
                >Receive email if someone answers my question
              </label>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-[#ff3823] text-xs">
            * Ask FinancePH is ideal for generic questions only. Please book an
            appointment with our speakers or consultants for personal questions.
          </p>
        </div>
        <div
          class="flex items-center justify-between p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <div class="flex flex-row gap-2 items-center">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              class="rounded-full w-12"
            />
            <div>
              <p class="font-bold text-xs">Alvin Granada</p>
              <div class="flex items-center">
                <input type="checkbox" />
                <label class="text-xs font-bold">Ask Anonymously</label>
              </div>
            </div>
          </div>
          <button class="px-2 py-1.5 rounded-md bg-[#e8dab2]">
            Add Question
          </button>
        </div>
      </div>
    </TheAskQuestionModal>
  </div>
</template>
