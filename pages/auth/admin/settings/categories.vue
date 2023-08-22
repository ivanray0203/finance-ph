<script setup>
definePageMeta({
  layout: "authenticated",
});

const data = [
  {
    id: 1,
    name: "Accounting",
    count: 2,
  },
  {
    id: 2,
    name: "Business Psychology",
    count: 2,
  },
  {
    id: 3,
    name: "Business Strategy Creation",
    count: 2,
  },
  {
    id: 4,
    name: "Digital Marketing for Entrepreneurs",
    count: 2,
  },
  {
    id: 5,
    name: "Entrepreneurship",
    count: 2,
  },
  {
    id: 6,
    name: "Estate Planning",
    count: 2,
  },
  {
    id: 7,
    name: "Leadership and Management",
    count: 2,
  },
  {
    id: 8,
    name: "Stock Market, Investments, Economics",
    count: 2,
  },
  {
    id: 9,
    name: "Taxation",
    count: 2,
  },
];
</script>
<template>
  <div class="flex gap-4 px-6 py-4">
    <!-- Fixed Sidebar -->
    <AdminSideBar />

    <!-- content -->
    <div class="flex flex-col px-4 gap-2 w-full">
      <p class="font-semibold text-xl">Add New Category</p>
      <hr class="border border-gray-300" />
      <div class="">
        <div class="flex gap-4">
          <select class="border border-black w-32 flex items-center rounded-md">
            <option>Bulk Action</option>
          </select>
          <button class="px-4 py-1.5 rounded-md text-white bg-[#dd6e42]">
            Apply
          </button>
        </div>
        <div class="w-full mt-4">
          <table class="w-full border-collapse">
            <thead class="border border-gray-500">
              <tr>
                <th class="border-b p-3 border-b-2 border-gray-500 text-left">
                  <input type="checkbox" /> Name
                </th>
                <th class="border-b p-3 border-b-2 border-gray-500 text-left">
                  Count
                </th>
              </tr>
            </thead>
            <tbody class="border border-gray-500">
              <tr v-for="item in data">
                <td class="p-3 flex item-center gap-2">
                  <input type="checkbox" />{{ item.name }}
                </td>
                <td class="p-3">{{ item.count }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
