<template>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(category, name) in categories" :key="name">
        <div class="rounded shadow p-6 bg-red-400">
          <h2 class="text-lg font-medium mb-4">{{ name }}</h2>
          <ul class="list-disc ml-6">
            <li v-for="subCategory in category" :key="subCategory.name">
              <h3 class="font-medium mb-2">{{ subCategory.name }}</h3>
              <ul class="list-disc ml-6">
                <li v-for="item in subCategory.items" :key="item">{{ item }}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      categories: {
        type: Object,
        required: true
      }
    }
  }
  </script>