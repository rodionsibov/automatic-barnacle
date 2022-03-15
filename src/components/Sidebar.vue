<script setup>
import { useStore } from "../stores";
import { storeToRefs } from "pinia";

const store = useStore();
const { collapsed, sidebarWidth } = storeToRefs(store);
const { toggleSidebar } = store;
</script>
  
<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
<h1>
  <span v-if="collapsed">
    <div>V</div>
    <div>S</div>
  </span>
</h1>

    <span class="collapse-icon" @click="toggleSidebar" :class="{'rotate-180': collapsed}">
      <i class="fas fa-angle-double-left"></i>
    </span>
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

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>