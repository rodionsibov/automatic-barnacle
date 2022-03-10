<script setup>
import { ref } from "vue";

const details = ref({
  title: "Details",
});

const products = ref([
  {
    productTitle: "ABCN",
    image: "https://picsum.photos/300?random=1",
    productId: 1,
  },
  {
    productTitle: "KARMA",
    image: "https://picsum.photos/300?random=2",
    productId: 2,
  },
  {
    productTitle: "Tino",
    image: "https://picsum.photos/300?random=3",
    productId: 3,
  },
  {
    productTitle: "EFG",
    image: "https://picsum.photos/300?random=4",
    productId: 4,
  },
  {
    productTitle: "MLI",
    image: "https://picsum.photos/300?random=5",
    productId: 5,
  },
  {
    productTitle: "Banans",
    image: "https://picsum.photos/300?random=6",
    productId: 6,
  },
]);
</script>

<template>
  <div>
    <div class="details">
      <div class="container text-center">
        <h1 class="display-5">{{ details.title }}</h1>
        <p class="">the product id is : {{ this.$route.params.id }}</p>
      </div>
    </div>
    <div class="col text-center mt-4" v-for="(product, index) in products" :key="index">
      <div v-if="this.$route.params.id == product.productId">
        <img :src="product.image" class="img-fluid" />
        <h2 class="mt-2">{{ product.productTitle }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
