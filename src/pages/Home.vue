<script setup>
import { ref } from "vue";

const home = ref({
  title: "Home",
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
console.log(products.value[0].productTitle);
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
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
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Dropdown</a
            >
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li> -->
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>

  <div class="home">
    <h1>{{ home.title }}</h1>
  </div>

  <div class="container-fluid">
    <div class="row">
      <div class="col-4" v-for="(data, index) in products" :key="index">
        <img :src="data.image" class="img-fluid" />
        <h3>{{ data.productTitle }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  margin: 20px auto;
}

</style>
