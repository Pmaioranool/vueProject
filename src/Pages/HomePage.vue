<template>
  <main>
    <h1>Home page</h1>
    <button class="button" @click="Increment">incrémenter</button>
    <h2>{{ btn }}</h2>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";

const btn = ref(0);

const Increment = () => {
  btn.value += 1;
};
</script>
<style></style>
