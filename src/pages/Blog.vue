<script setup>
import { ref } from "vue";

const blog = ref({
  title: "Blog",
});
</script>

<template>
  <div class="blog">
    <div class="container text-center">
      <h1 class="display-5">{{ blog.title }}</h1>
      <p class="lead">The Text Swappin' Link Hover Effect</p>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <p>
            Hover
            <a href="#" data-replace="get a link"><span>get a link</span></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
