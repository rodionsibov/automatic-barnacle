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
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  user-select: none;
  margin: 0.2em 0;
  padding: 1em 0.2em;
  border-radius: 0.25em;
  height: 1.5em;
  color: white;
  text-decoration: none;
}

.link:hover {
  background-color: var(--sidebar-item-hover);
}

.link:active {
  background-color: var(--sidebar-item-active);
}

.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>