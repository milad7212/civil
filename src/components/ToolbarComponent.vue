<template>
    <div>
      <header class="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
        <h1 class="text-2xl font-bold">دایرکتوری مهندسین</h1>
        <button class="block lg:hidden focus:outline-none" @click="isMenuOpen = !isMenuOpen">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isMenuOpen" d="M6 18L18 6M6 6l12 12" />
            <path v-else d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="lg:flex lg:items-center">
          <div class="flex flex-col lg:flex-row lg:ml-auto">
            <a href="#" class="px-3 py-2 text-white font-medium">خانه</a>
            <a href="#" class="px-3 py-2 text-white font-medium">درباره ما</a>
            <div @click="isSubMenuOpen = !isSubMenuOpen" class="relative">
              <a href="#" class="px-3 py-2 text-white font-medium">مهندسین</a>
              <div class="absolute top-0 left-0 -mt-2 -ml-2 inline-flex items-center justify-center bg-blue-500 rounded-full text-white text-sm w-6 h-6">{{ civilEngineersCount }}</div>
              <div v-if="isSubMenuOpen" class="absolute top-full right-0 bg-white mt-1 py-2 rounded-md shadow-lg w-64">
                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-100 flex justify-between items-center">
                  <span>مهندسین عمران:</span>
                  <span class="font-bold">{{ civilEngineersCount }}</span>
                </a>
                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-100 flex justify-between items-center">
                  <span>مهندسین برق:</span>
                  <span class="font-bold">{{ electricalEngineersCount }}</span>
                </a>
                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-100 flex justify-between items-center">
                  <span>مهندسین معماری:</span>
                  <span class="font-bold">{{ architecturalEngineersCount }}</span>
                </a>
                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-100 flex justify-between items-center">
                  <span>مهندسین مکانیک:</span>
                  <span class="font-bold">{{ mechanicalEngineersCount }}</span>
                </a>
                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-100 flex justify-center items-center">
                  <svg class="w-6 h-6 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                    <path d="M14.3 8a1 1 0 0 1 1.4 1.4l-6 6a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.4L8 12.58l5.3-5.3a1 1 0 0 1 1.4 0z" />
                  </svg>
                  <span class="ml-2">ایجاد کار جدید</span>
                </a>
              </div>
            </div>
            <a href="#" class="px-3 py-2 text-white font-medium">تماس با ما</a>
            <button class="px-3 py-2 text-white font-medium rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none">ورود</button>
          </div>
        </nav>
      </header>
      <!-- Rest of the content goes here -->
      <button class="fixed z-50 bottom-6 right-6 w-16 h-16 rounded-full bg-purple-500 focus:outline-none hover:bg-purple-600 flex justify-center items-center">
        <svg class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
          <path d="M14.3 8a1 1 0 0 1 1.4 1.4l-6 6a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.4L8 12.58l5.3-5.3a1 1 0 0 1 1.4 0z" />
        </svg>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
        isSubMenuOpen: false,
        civilEngineersCount: 10, // Replace with actual count of civil engineers
        electricalEngineersCount: 7, // Replace with actual count of electrical engineers
        architecturalEngineersCount: 5, // Replace with actual count of architectural engineers
        mechanicalEngineersCount: 8 // Replace with actual count of mechanical engineers
      }
    }
  }
  </script>
  
  <style>
  /* Add any necessary styles here */
  </style>