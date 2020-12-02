import Vue from "vue";
import Vuex from "vuex";
import { api } from "../../services/api";

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
    },
    token: ""
  },
  getters: {
    getUsername: state => {
      return state.user.name
    },
    getUseremail: state => {
      return state.user.email
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
          state.user = response.data.user;
          state.token = response.data.token
          localStorage.setItem("@session:user", JSON.stringify(state.user));
          localStorage.setItem("@session:token", state.token)
          window.location.replace("#/dashboard")
        })
        .catch(err => {
          console.log(err);
        });
    },

    getUser: (state) => {
      state.user = JSON.parse(localStorage.getItem("@session:user"));
      state.token = localStorage.getItem("@session:token");
    }
  }
});

export default store;
