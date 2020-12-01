import Vue from "vue";
import Vuex from "vuex";
import { api } from "../services/api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    auth: {
      email: "",
      password: ""
    },
    user: {
      id: 0,
      name: "",
      email: ""
    }
  },
  mutations: {
    getEmail: (state, email) => {
      state.auth.email = email;
    },
    getPassword: (state, pass) => {
      state.auth.password = pass;
    },
    signIn: async state => {
      const data = {
        email: state.auth.email,
        password: state.auth.password
      };

      api
        .post("/auth", data)
        .then(response => {
          state.user = response.data;
          localStorage.setItem("user", JSON.stringify(state.user));
          window.location.replace("#/dashboard")
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});

export default store;
