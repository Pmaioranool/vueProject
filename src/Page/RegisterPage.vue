<template>
  <h1>Login page</h1>
  <main>
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

const fields = [
  {
    id: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Password",
  },
  {
    id: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
  },
];

const buttons = [
  {
    id: "register",
    textContent: "inscription",
    type: "submit" as "submit",
  },
  {
    id: "reset",
    textContent: "Reset",
    type: "reset" as "reset",
  },
];
</script>
<style></style>
