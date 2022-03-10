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
  <div class="details">
    <div class="container text-center">
      <h1 class="display-5">{{ details.title }}</h1>
      <p class="">the product id is : {{ this.$route.params.id }}</p>
    </div>
    <div class="container text-center mt-4">
        <div class="col" v-for="(product, index) in products" :key="index">
          <div v-if="this.$route.params.id == product.productId">
            <img :src="product.image" class="img-fluid" />
            <h2 class="mt-2">{{ product.productTitle }}</h2>
          </div>
      </div>
    </div>
    <div class="container mt-4">
      <details
        class="list-group mb-2"
        open
        v-for="(detail, index) in 15"
        :key="index"
      >
        <summary class="list-group-item list-group-item-success" title="Toggle">
          <b>{{ detail }} - System Requirements</b>
        </summary>
        <p class="list-group-item">
          Requires a computer running an operating system. The computer must
          have some memory and ideally some kind of long-term storage. An input
          device as well as some form of output device is recommended.
        </p>
      </details>
    </div>
  </div>
</template>

<style scoped>
</style>
