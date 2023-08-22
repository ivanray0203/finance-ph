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
];

const notificationsMenu = [
  {
    id: 1,
    name: "All Notifications",
    active: true,
  },
  {
    id: 2,
    name: "Comments and Mentions",
    active: false,
  },
];

const notifications = [
  {
    id: 1,
    day: "Mon",
    name: 'Advisor Mark Fernandez answer questions. "Where can I download the sample client presentation"',
    isRead: false,
  },
  {
    id: 2,
    day: "Tue",
    name: 'Advisor Mark Fernandez answer questions. "Where can I download the sample client presentation"',
    isRead: true,
  },
  {
    id: 2,
    day: "Fri",
    name: "Upcoming Seminar. Estate Tax Amnesty Seminar",
    isRead: false,
    event: {
      meeting: "Online via zoom",
      date: "May 25, 2023",
    },
  },
];
</script>
<template>
  <div class="flex gap-2 px-6 py-4">
    <!-- Fixed Sidebar -->
    <div class="h-screen w-64">
      <div class="h-full px-3 overflow-y-auto">
        <div class="p-2">
          <h1 class="text-lg cursor-pointer font-bold">Filters</h1>
        </div>
        <hr class="border border-gray-300" />
        <ul class="text-sm mt-2">
          <li
            v-for="notification in notificationsMenu"
            :key="notification.id"
            class="text-sm hover:bg-[#e8dab2] rounded-md"
            :class="notification.active ? 'bg-[#e8dab2] ' : null"
          >
            <a
              href="#"
              class="flex text-sm items-center p-2 rounded-lg group hover:text-[#dd6e42]"
              :class="notification.active ? 'text-[#dd6e42]' : 'text-gray-900'"
            >
              <span class="ml">{{ notification.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- content -->
    <div class="flex flex-col gap-2 w-full">
      <p class="font-bold text-xl">Notifications</p>
      <hr class="border border-gray-300" />
      <div
        class="w-full border border-gray-300 p-4"
        v-for="notification in notifications"
        :key="notification.id"
        :class="notification.isRead ? 'bg-white' : 'bg-[#c0d6df]'"
      >
        <div class="flex w-full">
          <Icon
            name="ic:baseline-notifications"
            size="32"
            class="cursor-pointer"
          />
          <div class="flex flex-col gap-2">
            <p class="text-sm">{{ notification.day }}</p>
            <p class="text-sm">{{ notification.name }}</p>
            <div v-if="notification?.event" class="flex flex-col gap-2">
              <div class="flex gap-2 items-center">
                <Icon
                  name="material-symbols:tv-outline-sharp"
                  size="24"
                  color="#dd6e42"
                />
                <p class="text-sm">{{ notification?.event?.meeting }}</p>
              </div>
              <div class="flex gap-2 items-center">
                <Icon
                  name="material-symbols:calendar-today"
                  size="24"
                  color="#dd6e42"
                />
                <p class="text-sm">{{ notification?.event?.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
