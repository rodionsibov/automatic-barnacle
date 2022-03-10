<script setup>
import { ref } from "vue";

const blog = ref({
  title: "Blog",
});
</script>

<template>
  <div class="blog">
    <div class="container">
      <h1 class="text-primary text-center">{{ blog.title }}</h1>
      <p>Hover <a href="#" data-replace="get a link"><span>get a link</span></a></p>
    </div>
  </div>
</template>

<style scoped>
</style>
