<template>
  <button :type="data.type ? data.type : 'button'" :id="String(data.id)">
    {{ data.textContent }}
  </button>
</template>
<script setup lang="ts">
interface dataInterface {
  id: string | number;
  textContent: string;
  type?: "submit" | "reset" | "button";
}

interface ButtonComponentProps {
  data: dataInterface;
}

defineProps<ButtonComponentProps>();
</script>
