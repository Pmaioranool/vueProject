<template>
  <h1>Login page</h1>
  <main class="login__main">
    <section>
      <form>
        <section>
          <FieldComponent
            v-for="field in fields"
            :key="field.id"
            :data="field"
          />
        </section>
        <section>
          <ButtonComponent
            class="button"
            v-for="button in buttons"
            :key="button.id"
            :data="button"
          />
        </section>
      </form>
    </section>
  </main>
</template>
<script setup lang="ts">
import FieldComponent from "../components/FieldComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { reactive, watch } from "vue";

const fields = [
  {
    id: "username",
    type: "text",
    placeholder: "username",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Password",
  },
];

const buttons = [
  {
    id: "login",
    textContent: "Login",
    type: "submit" as "submit",
    disabled: true,
  },
  {
    id: "reset",
    textContent: "Reset",
    type: "reset" as "reset",
    disabled: false,
  },
];

const state = reactive({ username: "", password: "" });

watch([() => state.username, () => state.password], () => {});
</script>
<style lang="scss" scoped>
.login__main {
}
</style>
