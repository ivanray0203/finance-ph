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
      user: "Mark Fernandez",
      date: "June 21, 2023",
      img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
      answer: `
After creating a schedule on the website, follow these steps to schedule a webinar on Zoom:

1. Go to [zoom.us](https://zoom.us).
2. Click on the "Webinars" tab.
3. Select "Schedule a Webinar."

Fill out the following details:

- **Topic**
- **Date**
- **Duration** (must be 5 hours)
- Registration not required
`,
    },
  },
  {
    id: 1,
    img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Justine Varga",
    role: "Prospecting & Referals",
    date: "May 19, 2023",
    question:
      "How to create a finaceph seminar in the website and promote it in facebook?",
    answer: {
      user: "Mark Fernandez",
      date: "June 21, 2023",
      img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
      answer: `
After creating a schedule on the website, follow these steps to schedule a webinar on Zoom:

1. Go to [zoom.us](https://zoom.us).
2. Click on the "Webinars" tab.
3. Select "Schedule a Webinar."

Fill out the following details:

- **Topic**
- **Date**
- **Duration** (must be 5 hours)
- Registration not required
`,
    },
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
  layout: "authenticated",
});
</script>

<template>
  <div class="p-4 sm:ml-64">
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2 flex flex-col gap-4">
        <div class="w-full border border-gray-300 p-4 bg-white">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-4 justify-start">
              <p>
                Don't be shy. Type your question below and speakers will reply
                to it.
              </p>
              <div class="flex gap-2">
                <button
                  class="rounded-full bg-[#dd6e42] font-bold text-white p-2"
                >
                  <Icon
                    name="material-symbols:person"
                    color="white"
                    size="42"
                  />
                </button>
                <input
                  placeholder="What do you ask?"
                  class="py-4 px-2 w-full rounded-full border border-black bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
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
            <hr
              class="border border-gray-200 cursor-pointer"
              v-if="question.answer"
            />
            <div v-if="question.answer" class="flex flex-col gap-4">
              <div class="flex gap-2">
                <img
                  :src="question.answer.img"
                  class="rounded-full"
                  width="40"
                />
                <p>Answered By:</p>
                <p class="font-bold">
                  {{ question.answer.user }} • {{ question.answer.date }}
                </p>
              </div>
              <div>
                <TheMarkDownViewer :source="question.answer.answer" />
              </div>
            </div>
            <hr class="border border-gray-200 cursor-pointer" />
            <div class="flex justify-between items-center gap-2">
              <div class="flex gap-2">
                <span
                  ><Icon
                    name="material-symbols:arrow-circle-up-outline"
                    size="32"
                    color="#70d6ff"
                  />
                  5</span
                >
                <span>
                  <Icon
                    name="material-symbols:arrow-circle-down-outline-rounded"
                    size="32"
                    color="#70d6ff"
                  />
                  6
                </span>
                <span> <Icon name="mdi:chat-outline" size="32" /> 6 </span>
              </div>
              <div class="flex gap-2">
                <button class="bg-[#00ff00] px-4 py-2 rounded-lg font-semibold">
                  2 Answers
                </button>
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
    <!-- add question -->
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
