<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">{{ data[0].name }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(child, index) in data[0].children" :key="index" class="bg-white rounded-lg shadow-md">
        <div class="h-56 bg-gray-300 rounded-t-lg">
          <img :src="getImage(child.slug)" class="h-full w-full object-cover rounded-t-lg" />
        </div>
        <div class="p-4">
          <h2 class="text-lg font-bold mb-2">{{ child.name }}</h2>
          <p class="text-gray-700 text-base mb-2">تعداد: {{ child.number }}</p>
          <p class="text-gray-700 text-base mb-2">UI/UX: {{ child.uiux }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [{
    name: "مهندسین",
    children: [
      { name: "معماران", number: 20, slug: "architects" },
      { name: "عمران", number: 150, slug: "civil" },
      { name: "برق", number: 40, slug: "electrical" },
      { name: "مکانیک", number: 60, slug: "mechanical" },
      { name: "نقشه برداری", number: 5, slug: "land-surveyors" },
    ],
  }],
    };
  },
};
</script>
