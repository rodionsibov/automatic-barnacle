<script setup>
import { ref } from "vue";

const blog = ref({
  title: "Blog",
});
</script>

<template>
  <div class="blog">
    <h1>{{ blog }}</h1>
  </div>
</template>

<style scoped>
</style>
