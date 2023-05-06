<template>
    <div class="container mx-auto py-8">
      <h1 class="text-3xl font-bold mb-4">Civil Engineers</h1>
      <div class="flex items-center mb-4">
        <label for="search" class="text-gray-800 font-semibold mr-4">Filter by name:</label>
        <input id="search" v-model="searchQuery" type="text" class="border border-gray-400 rounded-md px-2 py-1">
      </div>
      <div class="mt-8">
        <h2 class="text-lg font-bold mb-2">Filter by Specialty</h2>
        <div class="flex flex-wrap -mx-2">
          <button v-for="(specialty, index) in specialties" :key="index" @click="setFilter(specialty, 'specialty')" :class="['px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2', activeFilter === specialty ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700']">{{ specialty }}</button>
        </div>
      </div>
      <div class="flex flex-wrap -mx-4">
        <div v-for="(person, index) in filteredPersons" :key="index" class="w-full md:w-1/2 lg:w-1/3 px-4">
          <Person :name="person.name" :bio="person.bio" :specialties="person.specialties" :image="person.image" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Person from '@/components/PersonComponent.vue'
  
  export default {
    components: {
      Person
    },
    data() {
      return {
        persons: [
          {
            name: 'John Doe',
            bio: 'John is a civil engineer with experience in structural design and project management.',
            specialties: ['Structural Design', 'Project Management'],
            image: 'https://randomuser.me/api/portraits/men/1.jpg'
          },
          {
            name: 'Jane Smith',
            bio: 'Jane is a civil engineer with experience in transportation planning and traffic engineering.',
            specialties: ['Transportation Planning', 'Traffic Engineering'],
            image: 'https://randomuser.me/api/portraits/women/1.jpg'
          },
          {
            name: 'Bob Johnson',
            bio: 'Bob is a civil engineer with experience in water resources engineering and environmental consulting.',
            specialties: ['Water Resources Engineering', 'Environmental Consulting'],
            image: 'https://randomuser.me/api/portraits/men/2.jpg'
          },
          {
            name: 'Sarah Lee',
            bio: 'Sarah is a civil engineer with experience in geotechnical engineering and construction materials testing.',
            specialties: ['Geotechnical Engineering', 'Construction Materials Testing'],
            image: 'https://randomuser.me/api/portraits/women/2.jpg'
          }
        ],
        specialties: ['All', 'Structural Design', 'Project Management', 'Transportation Planning', 'Traffic Engineering', 'Water Resources Engineering', 'Environmental Consulting', 'Geotechnical Engineering', 'Construction Materials Testing'],
        activeFilter: 'All',
        searchQuery: ''
      }
    },
    computed: {
      filteredPersons() {
        if (this.activeFilter === 'All') {
          return this.persons.filter(person => person.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        } else {
          return this.persons.filter(person => person.specialties.includes(this.activeFilter) && person.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
      }
    },
    methods: {
      setFilter(filter, type) {
        if (type === 'specialty') {
          this.activeFilter = filter
        } else {
          this.searchQuery = filter
        }
      }
    }
  }
  </script>
  
  <style>
  /* Add any custom styles for the App component here */
  </style>