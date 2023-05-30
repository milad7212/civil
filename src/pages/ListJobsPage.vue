<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-gray-800 text-white">
      <div class="container mx-auto py-4 px-6 flex justify-between items-center">
        <h1 class="text-2xl font-bold">همگامان سازه</h1>
        <div class="flex">
          <!-- Search input -->
          <input class="border rounded-l px-4 py-2 bg-white text-gray-800 focus:outline-none"
                 placeholder="جستجو...">
          <!-- Filter dropdown -->
          <div class="relative">
            <button class="flex items-center border rounded-r px-4 py-2 bg-white text-gray-800"
                    @click="showFilter = !showFilter">
              <span>Filter</span>
              <svg class="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                      d="M4.293 6.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
              </svg>
            </button>
            <!-- Filter dropdown content -->
            <div v-show="showFilter"
                 class="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg">
              <ul class="py-2">
                <li class="px-4 py-2 hover:bg-gray-100">Plasterers</li>
                <li class="px-4 py-2 hover:bg-gray-100">Rebarbenders</li>
                <!-- Add more filter options -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main content -->
    <main class="flex-grow">
      <div class="container mx-auto py-4 px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <!-- Person card -->
          <div v-for="person in people"
               :key="person.id"
               class="bg-white rounded shadow-lg overflow-hidden">
            <div class="h-48 bg-gray-300"></div>
            <div class="p-4">
              <h2 class="text-lg font-bold">{{ person.name }}</h2>
              <p class="text-gray-700">{{ person.skills.join(', ') }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFilter: false,
      people: [
        { id: 1, name: 'John Doe', skills: ['Plasterer', 'Rebarbender'] },
        { id: 2, name: 'Jane Smith', skills: ['Plumber', 'Electrician'] },
        { id: 3, name: 'Bob Johnson', skills: ['Carpenter', 'Painter'] },
        // Add more people data
      ],
    };
  },
};
</script>