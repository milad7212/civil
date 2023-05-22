<template>
    
   
    <div class="container mx-auto py-8">
      <h1 class="text-3xl font-bold mb-4">Civil Engineering Jobs</h1>
      <div class="flex flex-wrap gap-4">
        <div v-for="(category, index) in categories" :key="index" class="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer w-64" @click="showJobs(category)">
          <img :src="`/images/${category.icon}`" alt="Category icon" class="w-full h-40 object-cover" />
          <div class="p-4">
            <h2 class="text-lg font-bold mb-2">{{category.title}}</h2>
            <p class="text-gray-800">{{category.description}}</p>
          </div>
          <div class="bg-gray-200 text-gray-700 px-4 py-2 rounded-b-lg text-sm font-medium">
            {{category.jobs.length}} Jobs
          </div>
        </div>
      </div>
      <div class="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center" v-if="showModal">
        <div class="bg-white rounded-lg overflow-hidden w-2/3">
          <div class="bg-gray-100 px-4 py-2">
            <h2 class="text-xl font-bold mb-2">{{selectedCategory.title}} Jobs</h2>
            <button class="absolute top-0 right-0 mt-4 mr-4 text-gray-700 hover:text-gray-800 cursor-pointer" @click="closeModal">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="px-4 py-2">
            <ul>
              <li v-for="(job, index) in selectedCategory.jobs" :key="index" class="mb-4">
                <div class="flex items-center mb-2">
                  <span class="font-bold text-gray-800 mr-2">{{job.title}}</span>
                  <span class="text-gray-600">{{job.location}}</span>
                </div>
                <p class="text-gray-700 leading-relaxed">{{job.description}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [
          {
            title: "Structural Engineering",
            icon: "structural.jpg",
            description: "Design and analyze structures such as buildings, bridges, and tunnels.",
            jobs: [
              {
                title: "Structural Engineer",
                location: "New York, NY",
                description: "Design and analyze structures for commercial and residential buildings."
              },
              {
                title: "Bridge Engineer",
                location: "San Francisco, CA",
                description: "Design and analyze bridges for transportation infrastructure projects."
              }
            ]
          },
          {
            title: "Geotechnical Engineering",
            icon: "geotechnical.jpg",
            description: "Study the behavior of soil and rock in relation to construction projects.",
            jobs: [
              {
                title: "Geotechnical Engineer",
                location: "Seattle, WA",
                description: "Perform geotechnical investigations and analysis for various construction projects."
              },
              {
                title: "Tunneling Engineer",
                location: "Denver, CO",
                description: "Design and manage tunneling projects for transportation and mining industries."
              }
            ]
          },
          {
            title: "Environmental Engineering",
            icon: "environmental.jpg",
            description: "Protect the environment and human health by addressing pollution and waste management.",
            jobs: [
              {
                title: "Environmental Engineer",
                location: "Boston, MA",
                description: "Design and implement solutions for environmental challenges such as air and water pollution."
              },
              {
                title: "Waste Management Engineer",
                location: "Houston, TX",
                description: "Develop and manage waste management systems for industrial and municipal facilities."
              }
            ]
          }
        ],
        selectedCategory: {},
        showModal: false
      }
    },
    methods: {
      showJobs(category) {
        this.selectedCategory = category;
        this.showModal = true;
      },
      closeModal() {
        this.selectedCategory = {};
        this.showModal = false;
      }
    }
  }
  </script>
  
  <style scoped>
  /* Styles for the component */
  </style>