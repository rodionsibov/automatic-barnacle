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

const goToDetail = (productId) => {
  router.push({ name: "Details", params: { id: productId } });
};
</script>

<template>
  <div class="home">
    <div class="container text-center">
      <h1 class="display-5">{{ home.title }}</h1>
      <p class="lead">The Sliding Highlight Link Hover Effect</p>
    </div>
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-4" v-for="(data, index) in products" :key="index">
          <img :src="data.image" class="img-fluid" />
          <h3
            @click="goToDetail(data.productId)"
            class="text-center mt-1 mb-3"
            style="cursor: pointer"
          >
            <span>{{ data.productTitle }}</span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  text-decoration: none;
  box-shadow: inset 0 0 0 0 #54b3d6;
  color: #54b3d6;
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
span:hover {
  box-shadow: inset 100px 0 0 0 #54b3d6;
  color: white;
}
</style>
