<template>
  <div class="person-card-wrapper">
    <div class="bg-white shadow-md rounded-md p-4 mb-4 cursor-pointer hover:shadow-2xl transition-all duration-150 ease-in-out" :class="{ 'border-2 border-pink-500': isFavorite }"  >
      <div class="flex items-center justify-between mb-4">
        <img class="rounded-full w-12 h-12 mr-4" :src="image" :alt="name">
        <button class="text-gray-500 hover:text-pink-500 focus:outline-none" @click="toggleFavorite">
          
            <heart-icon v-if="isFavorite" classes="w-8 h-8 text-pink-500" />
            <heart-icon v-else classes="w-8 h-8 text-gray-500" />
          
        </button>
      </div>
      
      <div>
        
        <h2 class="text-lg font-bold">{{ name }}</h2>
        <p class="text-gray-600">{{ bio }}</p>
      </div>
      <div class="mt-4">
        <h3 class="text-gray-800 font-semibold mb-2">تخصص ها:</h3>
        <ul class="list-disc pr-4">
          <li v-for="(specialty, index) in specialties" :key="index" class="text-gray-600">{{ specialty }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeartIcon from '@/components/icons/HeartIcon.vue'

export default {
  props: {
    name: String,
    bio: String,
    specialties: Array,
    image: String
  },
  data() {
    return {
      clicked: false,
      isFavorite: false
    }
  },
  methods: {
    handleClick() {
      this.clicked = true
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite
    }
  },
  components:{
    HeartIcon
  }
}
</script>

<style>
.person-card-wrapper {
  perspective: 1000px;
}

.person-card {
  position: relative;
  transition: all 0.3s ease-in-out;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}



.person-card-front, .person-card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.person-card-back {
  transform: rotateY(180deg);
  background-color: #F9A8D4;
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.person-card-back h2 {
  margin-top: 0;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>