<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

defineProps({
  to: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const isActive = computed(() => route.path === to);
console.log(isActive);
</script>
  
<template></template>

<style scoped>
</style>