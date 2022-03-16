<script setup>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "../stores";
import { storeToRefs } from "pinia";

const store = useStore();
const route = useRoute();

const { collapsed } = storeToRefs(store);

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
    <i class="icon" :class="props.icon"></i>
    <span v-if="!collapsed">
      <slot />
    </span>
  </router-link>
</template>

<style scoped>
</style>