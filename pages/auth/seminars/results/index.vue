<script setup>
const viewSubscribeModal = ref(false);
const viewTrialSubscribeModal = ref(false);

const openTrialSubscribeModal = () => {
  viewTrialSubscribeModal.value = true;
  closeSubscribeModalHandler();
};

const closeTrialSubscribeModal = () => {
  viewTrialSubscribeModal.value = false;
};

const openSubscribeModalHandler = () => {
  viewSubscribeModal.value = true;
};

const closeSubscribeModalHandler = () => {
  viewSubscribeModal.value = false;
};

definePageMeta({
  layout: "authenticated",
});
</script>
<template>
  <div class="flex py-2 px-32 justify-center flex-col gap-12">
    <div class="relative w-full">
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
    <div class="">
      <h1 class="text-[#ff3823] text-xl font-semibold">
        * If your question is not listed above, click the proceed button below
        to continue adding your question.
      </h1>
      <button
        class="px-4 py-2 text-white bg-[#dd6e42] rounded-md mt-4"
        @click="openSubscribeModalHandler"
      >
        Proceed
      </button>
    </div>

    <TheEmptyModal
      v-if="viewSubscribeModal"
      @closeModalHandler="closeSubscribeModalHandler"
    >
      <div class="text-center">
        <button class="p-2 bg-[#c0d6df] rounded-full">
          <Icon name="ic:sharp-warning" color="#dd6e42" size="35" />
        </button>
        <p class="text-xl mt-4">
          Hey Kent, you have yet to attend this seminar topic. Please subscribe
          to view the answer to this question
        </p>
        <button
          class="mt-4 px-4 py-1.5 text-white bg-[#dd6e42] text-sm rounded-full"
          @click="openTrialSubscribeModal"
        >
          Subscribe now
        </button>
      </div>
    </TheEmptyModal>

    <TheEmptyModal
      v-if="viewTrialSubscribeModal"
      @closeModalHandler="closeTrialSubscribeModal"
    >
      <div class="text-center">
        <button class="p-2 bg-[#c0d6df] rounded-full">
          <Icon name="eos-icons:hourglass" color="#dd6e42" size="35" />
        </button>
        <p class="text-xl mt-4">Hey, your free access is over</p>
        <p class="text-xs mt-2">
          Thanks for using Ask Finance PH. Your 7 day free access for attending
          one of our seminars is over. Please subscribe for a membership or
          attend a seminar related to this topic.
        </p>
        <button
          class="mt-4 px-4 py-1.5 text-white bg-[#dd6e42] text-sm rounded-full"
        >
          Subscribe now
        </button>
      </div>
    </TheEmptyModal>
  </div>
</template>
