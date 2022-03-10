<script setup>
import { ref } from "vue";

const services = ref({
  title: "Services",
});
</script>

<template>
  <div class="services">
    <div class="container text-center">
      <h1 class="display-5">{{ services.title }}</h1>
    </div>
    <div class="container">
      <details open>
        <summary class="mb-2 mt-4"><b>System Requirements</b></summary>
        <p>
          Requires a computer running an operating system. The computer must
          have some memory and ideally some kind of long-term storage. An input
          device as well as some form of output device is recommended.
        </p>
      </details>
    </div>
  </div>
</template>

<style scoped>
</style>
