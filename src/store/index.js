import { createStore } from "vuex";
import Technicians from "@/apis/Technicians"
import Auth from "@/apis/Auth"
import router from "@/router";

export default createStore({
  state: {
    user: null,
    msgLoginError: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setLoginErrorMsg(state, payload) {
      state.msgLoginError = payload;
    },
  },
  actions: {
    cargarLocalStorage({ commit }) {
      // validando si hay usuario
      if (localStorage.getItem("usuario")) {
        commit("setUser", JSON.parse(localStorage.getItem("usuario")));
      } else {
        return commit("setUser", null);
      }
    },
    gettingUser({ commit }) {
      Technicians.all()
        .then((resp) => {
          commit("settingUser", resp.data.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    ingresoUsuario({ commit }, usuario) {
      let msjErrorLogin;

      Auth.login(usuario)
      .then((resp) => {
        console.log(resp.data);
        Technicians.all(resp.data.data.id)
          .then((resp) => {
            commit("setUser", resp.data.user);
            localStorage.setItem("usuario", JSON.stringify(resp.data.user));
            router.push("/");
          })
          .catch((err) => {
            console.log(err.message);
          });
        return;
      }).catch((err) => {
        console.log(err.response.data);
        return commit("setLoginErrorMsg", err.response.data);
      });
    },
    cerrarSesion({ commit }) {
      localStorage.removeItem("usuario");
      router.push("/login");
    }
  },
  getters: {
    usuarioAutenticado(state) {
      return !!state.user; // !! hace que se devuelva true o false
    },
  },
  modules: {},
});