<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "../stores";

const store = useStore();
const { collapsed, sidebarWidth } = storeToRefs(store);
const { toggleSidebar } = store;
</script>
  
<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <span class="collapse-icon" @click="toggleSidebar"></span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;
}
</style>