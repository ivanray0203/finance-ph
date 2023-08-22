<script setup>
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
    id: 1,
    img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Justine Varga",
    role: "Prospecting & Referals",
    date: "May 19, 2023",
    question:
      "How to create a finaceph seminar in the website and promote it in facebook?",
  },
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
    id: 1,
    img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Justine Varga",
    role: "Prospecting & Referals",
    date: "May 19, 2023",
    question:
      "How to create a finaceph seminar in the website and promote it in facebook?",
  },
  {
    id: 1,
    img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Justine Varga",
    role: "Prospecting & Referals",
    date: "May 19, 2023",
    question:
      "How to create a finaceph seminar in the website and promote it in facebook?",
  },
];

const upcomingSeminars = [
  { id: 1, details: "VAT & Percentage Tax 101 Seminar (Includes SLSP)" },
  { id: 2, details: "Withholding Tax 101 Seminar (Includes Alphalist)" },
  {
    id: 3,
    details: "Income Tax 101 for Entrepreneurs, Freelancers & Professionals",
  },
  { id: 4, details: "Estate Planning Part 1: Estate Distribution" },
  { id: 4, details: "Estate Planning Part 1: Estate Distribution" },
  { id: 4, details: "Estate Planning Part 1: Estate Distribution" },
  { id: 4, details: "Estate Planning Part 1: Estate Distribution" },
];

const unansweredQuestions = [
  { id: 1, details: "Where can I download the sample client presentation ?" },
  {
    id: 2,
    details: "How to update/change email address in Insular customer portal?",
  },
  {
    id: 3,
    details:
      "How to secure a letter of authority in case underwriter requires the client to have a medical exam?",
  },
  { id: 4, details: "How to fill up recapture form?" },
  { id: 5, details: "Where can I find the Keyman Insurance in E-University?" },
];
definePageMeta({
  layout: "guest",
});
</script>
<template>
  <div class="p-4 sm:ml-64">
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2 flex flex-col gap-4">
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
            <div class="w-full">
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
      <!-- ... -->
      <div class="flex flex-col gap-4">
        <div class="border border-gray-300 p-4 bg-white flex flex-col gap-4">
          <div class="w-full text-center">
            <h1 class="text-xl font-bold">Upcoming Seminars</h1>
          </div>
          <hr class="border border-gray-200 cursor-pointer" />
          <div>
            <ul class="flex flex-col gap-4">
              <li
                v-for="upcomingSeminar in upcomingSeminars"
                :key="upcomingSeminar.id"
              >
                {{ upcomingSeminar.details }}
              </li>
            </ul>
          </div>
        </div>
        <div class="border border-gray-300 p-4 bg-white flex flex-col gap-4">
          <div class="w-full text-center">
            <h1 class="text-xl font-bold">Unanswered Questions</h1>
          </div>
          <hr class="border border-gray-200 cursor-pointer" />
          <div>
            <ul class="flex flex-col gap-4">
              <li
                v-for="unansweredQuestion in unansweredQuestions"
                :key="unansweredQuestion.id"
              >
                {{ unansweredQuestion.details }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
