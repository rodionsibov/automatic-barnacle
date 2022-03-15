<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { createPopper } from "@popperjs/core";
import { useStore } from "./stores";
import { storeToRefs } from "pinia";
import Sidebar from "./components/Sidebar.vue";

const store = useStore();
const { sidebarWidth } = storeToRefs(store);

const route = useRoute();
// onMounted(() => {
//   const element = document.querySelectorAll(".nav-item")[3];
//   const tooltip = document.querySelector("#tooltip");
//   const popperInstance = createPopper(element, tooltip, {
//     placement: "right",
//   });

//   const show = () => {
//     // Make the tooltip visible
//     tooltip.setAttribute("data-show", "");

//     // Enable the event listeners
//     popperInstance.setOptions((options) => ({
//       ...options,
//       modifiers: [
//         ...options.modifiers,
//         { name: "eventListeners", enabled: true },
//       ],
//     }));

//     // Update its position
//     popperInstance.update();
//   };

//   const hide = () => {
//     // Hide the tooltip
//     tooltip.removeAttribute("data-show");

//     // Disable the event listeners
//     popperInstance.setOptions((options) => ({
//       ...options,
//       modifiers: [
//         ...options.modifiers,
//         { name: "eventListeners", enabled: false },
//       ],
//     }));
//   };

//   const showEvents = ["mouseenter", "focus"];
//   const hideEvents = ["mouseleave", "blur"];

//   showEvents.forEach((event) => {
//     element.addEventListener(event, show);
//   });

//   hideEvents.forEach((event) => {
//     element.addEventListener(event, hide);
//   });
// });

watch(
  () => route.path,
  () => {
    console.log(route.path);
  }
);

// const toggle = () => {
//   document.querySelector("#navbarColor01").classList.toggle("collapse");
// };
</script>

<template>
  <Sidebar />
  <!-- <nav class="navbar navbar-expand-md navbar-dark bg-primary">
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
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link px-2" to="/"
              >Home
              <span class="visually-hidden">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-2" to="/blog">Blog</router-link>
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
    <div id="tooltip">
      My tooltip
      <div id="arrow" data-popper-arrow="top"></div>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div> -->

  <div :style="{ 'margin-left': sidebarWidth }" class="mt-4">
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

.router-link-active {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}

.router-link-active:hover {
  background-color: rgba(0, 0, 0, 0.3) !important;
}

#tooltip {
  display: none;
  background: #333;
  color: white;
  font-weight: bold;
  padding: 4px 8px;
  font-size: 13px;
  border-radius: 4px;
}

#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

#arrow {
  visibility: hidden;
}

#arrow::before {
  visibility: visible;
  content: "";
  transform: rotate(45deg);
}

#tooltip[data-popper-placement^="top"] > #arrow {
  bottom: -4px;
}

#tooltip[data-popper-placement^="bottom"] > #arrow {
  top: -4px;
}

#tooltip[data-popper-placement^="left"] > #arrow {
  right: -4px;
}

#tooltip[data-popper-placement^="right"] > #arrow {
  left: -4px;
}

#tooltip[data-show] {
  display: block;
}
</style>
