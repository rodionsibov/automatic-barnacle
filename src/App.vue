<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { createPopper } from "@popperjs/core";

const route = useRoute();

// createPopper(document.querySelector(".navbar-toggler-icon"), document.querySelector("#tooltip"), {
//   placement: "top",
// });

watch(
  () => route.path,
  () => {
    // console.log(route.path);
  }
);

const checkClass = (e) => {
  const link = e.target;
  link.classList.contains("router-link-active")
    ? link.classList.add("active")
    : link.classList.remove("active");
};

const toggle = () => {
  document.querySelector("#navbarColor01").classList.toggle("collapse");
};
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <button
        @click="toggle"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
        <div id="tooltip">My tooltip</div>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto" @click="checkClass($event)">
          <li class="nav-item">
            <router-link class="nav-link px-2 active" to="/"
              >Home
              <span class="visually-hidden">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link px-2"
              to="/blog"
              :class="{ active: isActive }"
              >Blog</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-2" to="/services"
              >Services</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-2" to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container my-4">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.fade-enter-active {
  opacity: 0;
  transition: opacity 1s ease-in;
}

.fade-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
