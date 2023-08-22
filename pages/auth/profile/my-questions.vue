<script setup>
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
            <button class="bg-[#00ff00] px-4 py-2 rounded-lg font-semibold">
              2 Answers
            </button>
            <button class="bg-[#e8dab2] px-4 py-2 rounded-lg font-semibold">
              Add Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
