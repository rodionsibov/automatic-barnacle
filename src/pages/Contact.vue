<script setup>
import { ref } from "vue";

const contact = ref({
  title: "Contact",
});
</script>

<template>
  <div class="contact">
    <div class="container">
      <h1 class="text-primary text-center">{{ contact.title }}</h1>
    </div>
  </div>
</template>

<style scoped>
</style>
