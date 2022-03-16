<script setup>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const isActive = computed(() => route.path === props.to);
</script>
  
<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon"></i>
    <slot />
  </router-link>
</template>

<style scoped>
</style>