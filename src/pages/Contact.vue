<script setup>
import { ref } from "vue";

const contact = ref({
  title: "Contact",
});
</script>

<template>
  <div class="contact">
    <h1>{{ contact }}</h1>
  </div>
</template>

<style scoped>
</style>
