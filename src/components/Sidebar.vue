<script setup>
import { useStore } from "../stores";
import { storeToRefs } from "pinia";
import SidebarLink from "./SidebarLink.vue";

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
      <span v-else>
        <div>Vue</div>
        <div>Sidebar</div>
      </span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/blog" icon="fas fa-columns">Blog</SidebarLink>
    <SidebarLink to="/services" icon="fas fa-char-bar">Services</SidebarLink>
    <SidebarLink to="/contact" icon="fas fa-users">Contact</SidebarLink>
    <SidebarLink to="/images" icon="fas fa-image">Images</SidebarLink>

    <span
      class="collapse-icon"
      @click="toggleSidebar"
      :class="{ 'rotate-180': collapsed }"
    >
      <i class="fas fa-angle-double-left"></i>
    </span>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 20px 0;
}

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
  bottom: 10px;
  left: 18px;
  color: rgba(255, 255, 255, 0.6);
  transition: 0.2s linear;
  cursor: pointer;
}

.collapse-icon:hover {
  color: rgba(255, 255, 255, 0.9);
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>