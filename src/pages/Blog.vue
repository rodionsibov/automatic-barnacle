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
      <p class="lead">The Right-to-Left Color Swap Link Hover Effect</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <a href="">Hover This Link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  background-image: linear-gradient(
    to right,
    #54b3d6,
    #54b3d6 50%,
    #000 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
}

a:before {
  content: '';
  background: #54b3d6;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}

a:hover {
 background-position: 0;
}

a:hover::before {
  width:100%;
}
</style>
