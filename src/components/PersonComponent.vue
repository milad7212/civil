<template>
  <div class="person-card-wrapper">
    <div class="bg-white shadow-md rounded-md p-4 mb-4 person-card" :class="{ 'border-2 border-pink-500': isFavorite }" @click="handleClick" :style="cardStyle">
      <div class="flex items-center justify-between mb-4">
        <img class="rounded-full w-12 h-12 mr-4" :src="image" :alt="name">
        <button class="text-gray-500 hover:text-pink-500 focus:outline-none" @click="toggleFavorite">
          <svg class="w-6 h-6 fill-current" :class="{ 'text-pink-500': isFavorite }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path v-if="isFavorite" d="M19.38,3.62a6,6,0,0,0-8.49,0L12,4.54l-1.89-1.89a6,6,0,0,0-8.49,8.49L4.54,12,2.65,13.89a6,6,0,0,0,8.49,8.49L12,19.46l1.89,1.89a6,6,0,0,0,8.49-8.49L19.46,12l1.89-1.89a6,6,0,0,0,0-8.49Z"/>
            <path v-else d="M19.38,3.62a6,6,0,0,0-8.49,0L12,4.54l-1.89-1.89a6,6,0,0,0-8.49,8.49L4.54,12,2.65,13.89a6,6,0,0,0,8.49,8.49L12,19.46l1.89,1.89a6,6,0,0,0,8.49-8.49L19.46,12l1.89-1.89a6,6,0,0,0,0-8.49Z"/>
          </svg>
        </button>
      </div>
      <div>
        <h2 class="text-lg font-bold">{{ name }}</h2>
        <p class="text-gray-600">{{ bio }}</p>
      </div>
      <div class="mt-4">
        <h3 class="text-gray-800 font-semibold mb-2">Specialties:</h3>
        <ul class="list-disc pl-4">
          <li v-for="(specialty, index) in specialties" :key="index" class="text-gray-600">{{ specialty }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
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
  computed: {
    cardStyle() {
      if (this.clicked) {
        return {
          backgroundColor: '#F9A8D4',
          animation: 'pulse 0.5s'
        }
      } else {
        return {
          backgroundColor: 'white'
        }
      }
    }
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

.person-card:hover {
  transform: rotateY(10deg) translateY(-5px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.person-card:hover .person-card-back {
  transform: rotateY(-180deg);
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