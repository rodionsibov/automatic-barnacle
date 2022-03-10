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
    </div>
    
  </div>
</template>

<style scoped>
</style>
