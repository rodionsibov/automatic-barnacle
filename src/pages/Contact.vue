<script setup>
import { ref } from "vue";

const contact = ref({
  title: "Contact",
});
</script>

<template>
  <div class="contact">
    <div class="container text-center">
      <h1 class="display-5">{{ contact.title }}</h1>
      <p class="lead">The Rainbow Underline Link Hover Effect</p>
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
  color: inherit;
  text-decoration: none;
  padding-bottom: 4px;
}

a {
  background: linear-gradient(
      to right,
      rgba(100, 200, 200, 1),
      rgba(100, 200, 200, 1)
    ),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
    );
  background-size: 100% 2px, 0 2px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}

a:hover {
  background-size: 0 2px, 100% 2px;
}
</style>
