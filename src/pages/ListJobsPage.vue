<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-gray-800 text-white">
      <div
        class="container mx-auto py-4 px-6 grid grid-cols-1 md:flex md:justify-center md:items-center"
      >
        <h1 class="text-2xl font-bold text-center mb-2">همگامان سازه</h1>
        <div class="flex  justify-center mt-2">
          <!-- Search input -->
          <input
            class="border rounded px-4 py-2 bg-white text-gray-800 focus:outline-none"
            placeholder="جستجو..."
          />
          <i class="fas fa-search text-gray-500 px-2"></i>

        </div>
      </div>
    </header>
    `
    <!-- Main content -->
    <main class="flex-grow">
      <div class="container mx-auto py-4 px-6">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <!-- Person card -->
          <div
            v-for="person in people"
            :key="person.id"
            class="bg-white rounded shadow-lg overflow-hidden"
          >
            <div
              class="h-40 p-1 bg-gray-900 rounded-b-sm flex overflow-hidden relative"
            >
              <img
                class="h-full aspect-square rounded-sm shadow-sm"
                :src="imageSrc"
                alt="My Image"
              />
            </div>
            <div class="p-4">
              <h2 class="text-lg font-bold">{{ person.name }}</h2>
              <p class="text-gray-700 my-2">{{ person.skills.join(" |  ") }}</p>
              <p class="text-left my-2 text-gray-800">
                <a
                  class="text-left my-2 text-gray-800"
                  :href="'tel:' + '09139939426'"
                  >09139939426</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import myImage from "@/assets/images/1.jpg";
export default {
  data() {
    return {
      showFilter: false,
      people: [
        {
          id: 1,
          name: "میلاد حسنی",
          skills: ["مهندس عمران", "برقکار", "تراکتور"],
        },
        { id: 2, name: "سجاد حسنی", skills: ["داربست ", "قالب بندی"] },
        { id: 3, name: "عباد حسنی", skills: ["طراحی نما", "پیمانکار"] },
        // Add more people data
      ],
      imageSrc: myImage,
    };
  },
};
</script>
