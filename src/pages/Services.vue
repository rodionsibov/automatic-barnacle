<script setup>
import { ref } from "vue";

const services = ref({
  title: "Services",
});
</script>

<template>
  <div class="services">
    <div class="container">
      <h1 class="text-primary text-center">{{ services.title }}</h1>
    </div>
  </div>
</template>

<style scoped>
</style>
