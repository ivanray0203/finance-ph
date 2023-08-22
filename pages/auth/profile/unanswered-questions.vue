<script setup>
const openModal = ref(false);
const openValidityPeriodModal = ref(false);

const openValidityPeriodModalHandler = () => {
  openValidityPeriodModal.value = true;
};

const closeValidityPeriodModalHandler = () => {
  openValidityPeriodModal.value = false;
};
const closeModalHandler = () => {
  openModal.value = false;
};

const openAddQuestionModal = () => {
  openModal.value = true;
};

definePageMeta({
  layout: "authenticated",
});

const questions = [
  {
    id: 1,
    img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Justine Varga",
    role: "Prospecting & Referals",
    date: "May 19, 2023",
    question:
      "How to create a finaceph seminar in the website and promote it in facebook?",
  },
  {
    id: 2,
    img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Justine Varga",
    role: "Prospecting & Referals",
    date: "May 19, 2023",
    question:
      "How to create a finaceph seminar in the website and promote it in facebook?",
  },
  {
    id: 3,
    img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Justine Varga",
    role: "Prospecting & Referals",
    date: "May 19, 2023",
    question:
      "How to create a finaceph seminar in the website and promote it in facebook?",
  },
  {
    id: 4,
    img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Justine Varga",
    role: "Prospecting & Referals",
    date: "May 19, 2023",
    question:
      "How to create a finaceph seminar in the website and promote it in facebook?",
  },
];
</script>
<template>
  <div class="flex gap-4 px-6 py-4">
    <!-- Fixed Sidebar -->
    <ProfileSideBar />

    <!-- content -->
    <div class="flex flex-col gap-2 w-full">
      <p class="font-bold text-xl">List of recent questions</p>
      <hr class="border border-gray-300" />
      <div
        class="w-full border border-gray-300 p-4 bg-white"
        v-for="question in questions"
        :key="question.id"
      >
        <div class="flex flex-col gap-4">
          <div class="flex gap-2 items-center justify-start">
            <img :src="question.img" class="rounded-full" />
            <div class="flex flex-col">
              <p class="text-lg font-bold">{{ question.name }}</p>
              <p class="text-sm">{{ question.role }} • {{ question.date }}</p>
            </div>
          </div>
          <div class="w-full flex flex-col gap-4">
            <h1 class="text-2xl font-bold">{{ question.question }}</h1>
          </div>
          <hr class="border border-gray-200 cursor-pointer" />
          <div class="flex justify-end items-center gap-2">
            <button
              class="bg-[#e8dab2] px-4 py-2 rounded-lg font-semibold"
              @click="openAddQuestionModal"
            >
              Add Answer
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <TheAddAnswerModal v-if="openModal" @closeModalHandler="closeModalHandler">
      <div class="flex flex-col gap-2">
        <div class="p-2">
          <h1 class="font-bold text-red-500">Question</h1>
          <h1 class="font-bold text-sm">
            How to create a financeph seminar in the website and promote it in
            facebook?
          </h1>
        </div>
        <quill-editor theme="snow" />

        <input type="file" class="border border-gray-300 rounded-lg p-1.5" />

        <div class="flex items-center justify-between">
          <div class="flex items-start"></div>
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
          <button
            class="px-2 py-1.5 rounded-md bg-[#e8dab2]"
            @click="openValidityPeriodModalHandler"
          >
            Add Answer
          </button>
        </div>
      </div>
      <!-- validity Modal -->
      <div
        v-if="openValidityPeriodModal"
        class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div
          class="relative bg-white w-2/5 shadow dark:bg-gray-700 text-center"
        >
          <div class="bg-[#dd6e42] p-2">
            <p class="text-white font-bold text-2xl">Answer Validity</p>
          </div>
          <div class="flex flex-col gap-2 px-12 py-2 justify-start items-start">
            <label>Please put a validity period for your answer</label>
            <select class="border border-black px-1.5 p-2 w-full">
              <option>Select A Validity Period</option>
            </select>
          </div>

          <div class="flex gap-2 px-12 py-2 justify-end">
            <button
              class="px-2 py-1.5 rounded-md bg-[#e8dab2]"
              @click="closeValidityPeriodModalHandler"
            >
              Confirm
            </button>
            <button
              class="px-2 py-1.5 rounded-md bg-[#e8dab2]"
              @click="closeValidityPeriodModalHandler"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </TheAddAnswerModal>
  </div>
</template>
