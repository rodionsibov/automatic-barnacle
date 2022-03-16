<script setup>
import { ref } from "vue";
import { useStore } from "../stores";
import { storeToRefs } from "pinia";

const store = useStore();
const { collapsed } = storeToRefs(store);
const { toggleSidebar } = store;

const home = ref({
  title: "Home",
});
</script>

<template>
  <div class="home">
    <div class="container text-center">
      <h1 class="display-5">{{ home.title }}</h1>
      <p class="lead">The Sidebar is {{ collapsed ? "closed" : "open" }}</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <button class="btn btn-secondary" @click="toggleSidebar">
            Toggle Sidebar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
