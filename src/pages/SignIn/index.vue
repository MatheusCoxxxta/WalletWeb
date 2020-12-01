<template>
  <div class="main">
    <form-login :method="login" />
  </div>
</template>

<script>
import formLogin from "./components/formLogin";

export default {
  components: {
    formLogin
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    login(user) {
      this.$store.commit("getEmail", user.email);
      this.$store.commit("getPassword", user.password);
      this.$store.commit("signIn");
    }
  }
};
</script>

<style>
body {
  width: 100vw;
}
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
