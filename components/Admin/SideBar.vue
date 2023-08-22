<script setup>
const route = useRoute();

const myProfileMenus = computed(() => {
  return [
    {
      id: 1,
      name: "Categories",
      active: route.path === "/auth/admin/settings/categories",
      link: "/auth/admin/settings/categories",
    },
    {
      id: 2,
      name: "Subscriptions",
      active: false,
      link: "#",
    },
  ];
});
</script>
<template>
  <div class="h-screen w-64">
    <div class="h-full">
      <ul class="text-sm mt-2">
        <li class="text-lg font-bold flex gap-2 items-center mb-4">
          <Icon
            name="material-symbols:settings-rounded"
            size="32"
            color="#4f6d7a"
          />
          <p>Admin Settings</p>
        </li>
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
