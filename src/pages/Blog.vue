<script setup>
import { ref } from "vue";

const blog = ref({
  title: "Blog",
});
</script>

<template>
  <div class="blog">
    <h1>{{ blog.title }}</h1>
  </div>
</template>

<style scoped>
</style>
