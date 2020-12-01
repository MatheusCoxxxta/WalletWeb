<template>
  <card class="col-md-3">
    <h5 slot="header" class="title">Autentique-se</h5>
    <div class="column">
      <div class="col-md-12 pr-md-1">
        <base-input label="Email" placeholder="Email" v-model="user.email">
        </base-input>
      </div>
      <div class="col-md-12 pr-md-1">
        <base-input label="Senha" placeholder="Senha" v-model="user.password">
        </base-input>
      </div>
    </div>
    <div class="col-md-12 m pr-md-1 mt-4">
      <base-button
        class="col-md-12 px-md-1"
        slot="footer"
        type="primary"
        @click="handleLogin"
        >Entrar</base-button
      >
    </div>
  </card>
</template>

<script>
export default {
  name: "FormLogin",
  props: {
    method: { type: Function }
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    handleLogin() {
      this.method(this.user);
    }
  }
};
</script>

<style></style>
