<template>
  <header>
    <nav>
      <router-link
        class="button is-link is-soft"
        :to="isLoggingIn ? '/register' : '/login'"
        >{{ isLoggingIn ? "inscription" : "connexion" }}</router-link
      >
    </nav>
  </header>
</template>
<script setup lang="ts">
// const invertLogin = (isLoggingIn) => !isLoggingIn;
// invertLogin(true);
interface Props {
  isLoggingIn: boolean;
}

defineProps<Props>();
</script>
