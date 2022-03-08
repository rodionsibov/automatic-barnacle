<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

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

const router = useRouter();
const route = useRoute();

const goTodetail = () => {
  router.push({ name: "details" });
};
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="/"
              >Home
              <span class="visually-hidden">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="home">
    <h1 class="text-center my-2">{{ home.title }}</h1>
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
