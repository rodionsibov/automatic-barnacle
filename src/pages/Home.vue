<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute, onBeforeRouteLeave } from "vue-router";

const router = useRouter();
const route = useRoute();

const home = ref({
  title: "Home",
});

watch(
  () => route.params.id,
  () => {
    console.log("route params id: ", route.params.id);
  }
);

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

onBeforeRouteLeave((to, from) => {
  const answer = window.confirm(
    "Do you really want to leave? you have unsaved changes!"
  );
  // cancel the navigation and stay on the same page
  if (!answer) return false;
});

const goTodetail = () => {
  router.push({ name: "details" });
};
</script>

<template>
  <div class="home">
    <div class="container">
      <h1 class="text-primary text-center">{{ home.title }}</h1>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4" v-for="(data, index) in products" :key="index">
        <img :src="data.image" class="img-fluid" />
        <h3 @click="goTodetail()" class="text-center" style="cursor: pointer">
          {{ data.productTitle }}
        </h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
