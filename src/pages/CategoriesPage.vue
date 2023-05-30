<template>
  <div v-for="(data,indexParent) in dataSource" :key="data.name" class="cursor-pointer p-4">
    <h1 class="text-2xl font-bold mb-4">{{ data.name }}</h1>
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">
      <div
        v-for="(child, index) in sortedChildren(indexParent)"
        :key="index"
        class="bg-white rounded-lg shadow-md border border-gray-300 hover:shadow-lg text-center card"
      >
        <div
          class="h-40 bg-gray-300 rounded-t-lg overflow-hidden flex items-center justify-center"
        >
          <img
            class="h-full w-full object-cover "
            :src="getImageUrl(child.slug)"
            alt="Image of {{ child.name }}"
          />
        </div>
        <div class="p-4">
          <h2 class="text-gray-900 font-semibold text-lg mb-2">
            {{ child.name }}
          </h2>
          <p class="text-gray-700 text-base mb-2">تعداد: {{ child.number }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
/* Styles for small screens */
<style>
@media (max-width: 639px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

/* Styles for card hover */
.card:hover {
  transform: translateY(-5px);
  transition-duration: 0.3s;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
}

/* Styles for card tooltip */
.card .tooltip {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
  transition: all 0.3s ease-in-out;
}

.card:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

/* Styles for progress bar */
.progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #f1f1f1;
}

.progress-bar {
  height: 100%;
  background-color: #4caf50;
}
</style>

<script>
export default {
  data() {
    return {
      dataSource: [
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
        {
          name: "ماشین آلات",
          children: [
            { name: "جرثقل", number: 20, slug: "architects" },
            { name: "لودر", number: 150, slug: "Loaders" },
            { name: "تراکتور", number: 40, slug: "Bulldozers" },
            { name: "کامیون", number: 60, slug: "Cranes" },
            { name: "بونکر سیمان ", number: 5, slug: "Dump Trucks" },
          ],
        },

      
      ],
   
      loading: true,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const response = await fetch("data.json");
        this.data = await response.json();
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    getImageUrl(slug) {
      return `https://source.unsplash.com/200x200/?${slug}`;
    },
    getSortedChildren(index) {
      return this.dataSource[index].children.sort((a, b) => b.number - a.number);
    },
  },
  computed: {
    sortedChildren() {
      return indexParent => this.getSortedChildren(indexParent);
    },
  },
};
</script>




