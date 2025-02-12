<template>
  <button
    :type="data.type ? data.type : 'button'"
    :id="String(data.id)"
    :disabled="data.disabled ? data.disabled : false"
    :v-model="data.id"
  >
    {{ data.textContent }}
  </button>
</template>
<script setup lang="ts">
interface dataInterface {
  id: string | number;
  textContent: string;
  type: "button" | "submit" | "reset";
  disabled: boolean;
}

interface ButtonComponentProps {
  data: dataInterface;
}

defineProps<ButtonComponentProps>();
</script>
