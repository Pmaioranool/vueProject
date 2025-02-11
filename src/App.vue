<template>
  <HeaderLayout :is-logging-in="false" />
  <router-view></router-view>
</template>
<script setup lang="ts">
import HeaderLayout from "./Layout/HeaderLayout.vue";
</script>
<style></style>
