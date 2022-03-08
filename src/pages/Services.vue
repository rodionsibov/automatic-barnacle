<script setup>
import { ref } from "vue";

const services = ref({
  title: "Services",
});
</script>

<template>
  <div class="services">
    <h1>{{ services }}</h1>
  </div>
</template>

<style scoped>
</style>
