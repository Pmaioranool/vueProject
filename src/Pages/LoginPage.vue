<template>
  <h1>Login page</h1>
  <main>
    <section>
      <form @submit.prevent.once="submitHandler">
        <!-- <section>
          <FieldComponent
            v-for="field in fields"
            :key="field.id"
            :data="field"
            v-model="field.vModel"
          />
        </section> -->

        <section>
          <article>
            <label for="username"></label
            ><input
              class="input"
              type="text"
              id="username"
              placeholder="username"
              v-model="logUser.username"
              style=""
            />
          </article>
          <article>
            <label for="password"></label
            ><input
              class="input"
              type="password"
              id="password"
              placeholder="Password"
              v-model="logUser.password"
              style=""
            />
          </article>
        </section>
        <section>
          <ButtonComponent
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

const logUser = reactive({
  username: "",
  password: "",
});

const fields = [
  {
    id: "username",
    type: "text",
    placeholder: "username",
    vModel: logUser.username,
  },
  {
    id: "password",
    type: "password",
    placeholder: "Password",
    vModel: logUser.password,
  },
];

const buttons = [
  {
    id: "login",
    textContent: "Login",
    type: "submit" as "submit",
    disabled: true,
    class: "button is-dark",
  },
  {
    id: "reset",
    textContent: "Reset",
    type: "reset" as "reset",
    disabled: false,
    class: "button is-danger is-dark",
  },
];

const submitHandler = () => {};

const inputHandler = () => {};

const isUserInputValid = (input: string): boolean => {
  const pattern = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/i);
  return false;
};

watch(logUser, (val) => {
  console.log("change");
});
</script>
