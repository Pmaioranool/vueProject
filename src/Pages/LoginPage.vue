<template>
  <h1>Login page</h1>
  <main>
    <section>
      <form @submit.prevent="submitHandler">
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
              id="email"
              placeholder="email"
              v-model="email"
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
              v-model="password"
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
// import FieldComponent from "../components/FieldComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { reactive, watch, ref } from "vue";
import validator from "../utils/input-validator";
import { useRouter } from "vue-router";

const router = useRouter();

// const fields = [
//   {
//     id: "username",
//     type: "text",
//     placeholder: "username",
//     vModel: logUser.username,
//   },
//   {
//     id: "password",
//     type: "password",
//     placeholder: "Password",
//     vModel: logUser.password,
//   },
// ];

const buttons = [
  {
    id: "login",
    textContent: "Login",
    type: "submit" as "submit",
    disabled: false, // / !logUser.username || !logUser.password, a faire
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

// const logUser = reactive({
//   email: "",
//   password: "",
// });

const email = ref("");
const password = ref("");

const submitHandler = async () => {
  const result = await fetch("user.json");
  const users = await result.json();

  const user = users.find(
    (user: { email: string; password: string }) => user.email === email.value
  );
  if (!user) {
    alert("User not found");
    return;
  }
  if (!(user.password === password.value)) {
    alert("incorrect password");
  }

  console.log("User found", user);
};

const inputHandler = () => {};

inputHandler();

const isEmailValid = reactive({ value: false });
const isPasswordValid = reactive({ value: false });

watch(email, (newVal) => {
  console.log(validator(newVal, "email"));
});

watch(password, (newVal) => {
  console.log(validator(newVal, "password"));
});
</script>
