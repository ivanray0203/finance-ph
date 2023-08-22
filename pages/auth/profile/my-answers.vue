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
    answer: {
      id: 1,
      user: "Anonymous",
      date: "June 21, 2023",
      title: "Please watch this video training",
      answer_description:
        "www.loom.com/share/08ee2bededac48e7a33c756463d54b40?from_recorder=1&focus_title=1",
    },
  },
  {
    id: 2,
    img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Justine Varga",
    role: "Prospecting & Referals",
    date: "May 19, 2023",
    question:
      "How to create a finaceph seminar in the website and promote it in facebook?",
    answer: {
      id: 1,
      user: "Anonymous",
      date: "June 21, 2023",
      title: "Please watch this video training",
      answer_description:
        "www.loom.com/share/08ee2bededac48e7a33c756463d54b40?from_recorder=1&focus_title=1",
    },
  },
  {
    id: 3,
    img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Justine Varga",
    role: "Prospecting & Referals",
    date: "May 19, 2023",
    question:
      "How to create a finaceph seminar in the website and promote it in facebook?",
    answer: {
      id: 1,
      user: "Anonymous",
      date: "June 21, 2023",
      title: "Please watch this video training",
      answer_description:
        "www.loom.com/share/08ee2bededac48e7a33c756463d54b40?from_recorder=1&focus_title=1",
    },
  },
  {
    id: 4,
    img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Justine Varga",
    role: "Prospecting & Referals",
    date: "May 19, 2023",
    question:
      "How to create a finaceph seminar in the website and promote it in facebook?",
    answer: {
      id: 1,
      user: "Anonymous",
      date: "June 21, 2023",
      title: "Please watch this video training",
      answer_description:
        "www.loom.com/share/08ee2bededac48e7a33c756463d54b40?from_recorder=1&focus_title=1",
    },
  },
];
</script>
<template>
  <div class="flex gap-4 px-6 py-4">
    <!-- Fixed Sidebar -->
    <ProfileSideBar />

    <!-- content -->
    <div class="flex flex-col gap-2 w-full">
      <p class="font-bold text-xl">List of my recent answers</p>
      <hr class="border border-gray-300" />
      <div
        v-for="question in questions"
        :key="question.id"
        class="flex flex-col gap-2"
      >
        <div class="w-full border border-gray-300 p-4 bg-white">
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
          </div>
        </div>
        <div
          class="w-full border border-gray-300 p-4 bg-gray-300"
          v-if="question.answer"
        >
          <div class="flex flex-col gap-4">
            <div class="flex gap-2 items-center justify-start">
              <img :src="question.img" class="rounded-full" width="32" />
              <p>Answered By:</p>
              <p class="text-sm font-bold">• {{ question?.answer?.date }}</p>
            </div>
            <hr class="border border-white" />
            <div class="w-full flex flex-col gap-4">
              <p>{{ question?.answer?.title }}</p>
              <div class="mt-4">
                <a class="text-blue-500"
                  ><span class="text-black">Part 1: </span
                  >{{ question?.answer?.answer_description }}</a
                >
              </div>
            </div>
            <hr class="border border-white" />
            <div class="flex gap-2 justify-end">
              <button class="px-4 py-2 bg-[#ff3823] text-white rounded-lg">
                Delete
              </button>
              <button class="px-4 py-2 bg-[#ffa834] text-white rounded-lg">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
