<script setup>
definePageMeta({
  layout: "guest",
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

const bySpeakers = [
  {
    id: 1,
    name: "Mark Fernandez",
    active: true,
  },
  {
    id: 2,
    name: "Speaker 2",
    active: false,
  },
  {
    id: 3,
    name: "Speaker 3",
    active: false,
  },
];

const byTimes = [
  {
    id: 1,
    time: "All Time",
    active: true,
  },
  {
    id: 2,
    time: "Past Hour",
    active: false,
  },
  {
    id: 3,
    time: "Past Day",
    active: false,
  },
  {
    id: 4,
    time: "Past Week",
    active: false,
  },
  {
    id: 5,
    time: "Past Month",
    active: false,
  },
];

const byVotes = [
  {
    id: 1,
    vote: "Highest to Lowest",
    active: true,
  },
  {
    id: 2,
    vote: "Loweset Highest",
    active: false,
  },
];
</script>
<template>
  <div class="grid grid-cols-5 gap-2 px-6 py-4">
    <!-- Fixed Sidebar -->
    <div class="h-screen">
      <div class="h-full px-3 overflow-y-auto">
        <div class="p-2 text-center">
          <h1 class="text-lg cursor-pointer font-semibold">Clear Filter</h1>
        </div>
        <hr class="border border-gray-300" />
        <div class="p-2">
          <h1 class="text-lg cursor-pointer font-bold">By Speaker</h1>
        </div>
        <hr class="border border-gray-300" />
        <ul class="text-sm mt-2">
          <li
            v-for="bySpeaker in bySpeakers"
            :key="bySpeaker.id"
            class="text-sm hover:bg-[#e8dab2] rounded-md"
            :class="bySpeaker.active ? 'bg-[#e8dab2] ' : null"
          >
            <a
              href="#"
              class="flex text-sm items-center p-2 rounded-lg group hover:text-[#dd6e42]"
              :class="bySpeaker.active ? 'text-[#dd6e42]' : 'text-gray-900'"
            >
              <span class="ml">{{ bySpeaker.name }}</span>
            </a>
          </li>
        </ul>
        <div class="p-2">
          <h1 class="text-lg cursor-pointer font-bold">By Time</h1>
        </div>
        <hr class="border border-gray-300" />
        <ul class="text-sm mt-2">
          <li
            v-for="byTime in byTimes"
            :key="byTime.id"
            class="text-sm hover:bg-[#e8dab2] rounded-md"
            :class="byTime.active ? 'bg-[#e8dab2]' : null"
          >
            <a
              href="#"
              class="flex text-sm items-center p-2 rounded-lg group hover:text-[#dd6e42]"
              :class="byTime.active ? 'text-[#dd6e42]' : 'text-gray-900 '"
            >
              <span class="ml">{{ byTime.time }}</span>
            </a>
          </li>
        </ul>
        <div class="p-2">
          <h1 class="text-lg cursor-pointer font-bold">By Votes</h1>
        </div>
        <hr class="border border-gray-300" />
        <ul class="text-sm mt-2">
          <li
            v-for="byVote in byVotes"
            :key="byVote.id"
            class="text-sm hover:bg-[#e8dab2] rounded-md"
            :class="byVote.active ? 'bg-[#e8dab2]' : null"
          >
            <a
              href="#"
              class="flex text-sm items-center p-2 rounded-lg group hover:text-[#dd6e42]"
              :class="byVote.active ? 'text-[#dd6e42]' : 'text-gray-900'"
            >
              <span class="ml">{{ byVote.vote }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- content -->
    <div class="col-span-3 flex flex-col gap-4">
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
            <p class="text-[#ff3823]">
              This question is merged with 2 others questions
            </p>
          </div>
          <hr class="border border-gray-200 cursor-pointer" />
          <div class="flex justify-end items-center gap-2">
            <button class="bg-[#e8dab2] px-4 py-2 rounded-lg font-semibold">
              Add Answer
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- seminars -->
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
</template>
