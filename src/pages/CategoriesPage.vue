<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">{{ data[0].name }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(child, index) in data[0].children"
        :key="index"
        class="bg-white rounded-lg shadow-md border border-gray-300 hover:shadow-lg"
      >
        <div class="h-56 bg-gray-300 rounded-t-lg flex items-center justify-center">
          <h2 class="text-white font-bold text-lg">{{ child.name }}</h2>
        </div>
        <div class="p-4">
          <p class="text-gray-700 text-base mb-2">تعداد: {{ child.number }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Styles for small screens */
@media (max-width: 639px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: "مهندسین",
          children: [
            { name: "معماران", number: 20, slug: "architects" },
            { name: "عمران", number: 150, slug: "civil" },
            { name: "برق", number: 40, slug: "electrical" },
            { name: "مکانیک", number: 60, slug: "mechanical" },
            { name: "نقشه برداری", number: 5, slug: "land-surveyors" },
          ],
        },
      ],
    };
  },
};
</script>