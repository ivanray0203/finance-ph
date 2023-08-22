<script setup>
const route = useRoute();

const myProfileMenus = computed(() => {
  return [
    {
      id: 1,
      name: "My Questions",
      active: route.path === "/auth/profile/my-questions",
      link: "/auth/profile/my-questions",
    },
    {
      id: 2,
      name: "My Answers",
      active: route.path === "/auth/profile/my-answers",
      link: "/auth/profile/my-answers",
    },
    {
      id: 3,
      name: "Unanswered Questions",
      active: route.path === "/auth/profile/unanswered-questions",
      link: "/auth/profile/unanswered-questions",
    },
  ];
});
</script>
<template>
  <div class="h-screen w-64">
    <div class="h-full">
      <ul class="text-sm mt-2">
        <li
          v-for="myProfileMenu in myProfileMenus"
          :key="myProfileMenu.id"
          class="text-sm hover:bg-[#c0d6df] rounded-md"
          :class="myProfileMenu.active ? 'bg-[#c0d6df] ' : null"
        >
          <NuxtLink
            :to="myProfileMenu.link"
            class="flex text-lg font-bold items-center p-2 rounded-lg group hover:text-black"
            :class="myProfileMenu.active ? 'text-black' : 'text-gray-900'"
          >
            <span class="ml">{{ myProfileMenu.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
