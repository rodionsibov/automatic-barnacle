<script setup>
import { ref } from "vue";

const services = ref({
  title: "Services",
});
</script>

<template>
  <div class="services">
    <div class="container text-center">
      <h1 class="display-5">{{ services.title }}</h1>
      <p class="lead">The Passing Underline Link Hover Effect</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <a href="">Hover This Link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #18272f;
  position: relative;
  text-decoration: none;
  padding-bottom: 4px;
}

a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: #18272f;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
</style>
