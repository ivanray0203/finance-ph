<script setup>
const route = useRoute();

const categories = [
  { key: 1, content: "Accounting" },
  { key: 2, content: "Business Psychology" },
  { key: 3, content: "Business Strategy Creation" },
  { key: 4, content: "Digital Marketing for Entrepreneurs" },
  { key: 5, content: "Entrepreneurship" },
  { key: 6, content: "Estate Planning" },
  { key: 7, content: "Leadership and Management" },
  { key: 8, content: "Stock Market, Investments, Economics" },
  { key: 9, content: "Taxation" },
];

const openModal = ref(false);

const openModalHandler = () => (openModal.value = true);

const closeModalHandler = () => {
  openModal.value = false;
};
</script>

<template>
  <div>
    <!-- Fixed Header -->
    <div class="fixed top-0 left-0 w-full h-24 bg-[#C0D6DF] p-4">
      <div class="flex justify-between gap-4 items-center">
        <h1 class="text-4xl font-bold">ASKFINANCE</h1>
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
        <span></span>
        <button
          @click="openModalHandler"
          class="rounded-full bg-[#dd6e42] px-6 py-3.5 font-bold w-32 text-white"
        >
          Sign In
        </button>
      </div>
    </div>

    <!-- Content Area (for the rest of the page) -->
    <div class="mt-24 flex">
      <!-- Fixed Sidebar -->
      <div
        v-if="
          !route.path.startsWith('/ask-questions') &&
          !route.path.startsWith('/answer-questions')
        "
        class="fixed top-24 left-0 h-screen w-64 bg-gray-200"
      >
        <div
          class="h-full px-3 py-4 overflow-y-auto bg-[#EAEAEA] dark:bg-gray-800"
        >
          <div class="p-2">
            <h1 class="text-2xl font-bold">Select Category</h1>
          </div>
          <hr class="border border-black" />
          <ul class="space-y-2 font-medium">
            <li v-for="category in categories" :key="category.key">
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="ml">{{ category.content }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="flex-grow">
        <slot />
        <TheModal v-if="openModal" @closeModalHandler="closeModalHandler">
          <form class="px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border border-black rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                placeholder="Email"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border rounded-md border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div class="flex items-center justify-between mb-6">
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
                  <label for="remember" class="dark:text-gray-300"
                    >To avoid copy-cats, I agree not to divulge the features of
                    this website and legally bind myself to this
                    agreeement.</label
                  >
                </div>
              </div>
            </div>
            <div class="mb-6">
              <button
                type="submit"
                class="w-full text-white bg-[#dd6e42] hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
            </div>
            <div class="text-center">
              <p class="text-sm">
                Don't have an account?
                <a href="" class="text-blue-500">Register</a> here!!
              </p>
              <a href="" class="text-sm text-blue-500">Forgot Password</a>
            </div>
          </form>
        </TheModal>
      </div>
    </div>
  </div>
</template>

<style>
/* Add the background color to the body */
body {
  background-color: #f7f6f6; /* Replace with your desired color */
}
</style>
