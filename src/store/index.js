import { createStore } from "vuex";
import Technicians from "@/apis/Technicians"
import router from "@/router";

export default createStore({
  state: {
    user: {
      city: {
        description: ''
      }
    },
    msgLoginError: null
  },
  mutations: {
    settingUser(state, payload) {
      state.user = payload
    },
    setLoginErrorMsg (state, payload) {
      state.msgLoginError = payload;
    }
  },
  actions: {
    gettingUser({ commit }) {
      Technicians.all()
        .then((resp) => {
          commit("settingUser", resp.data.user);
        }).catch((err) => {
          console.log(err.message);
        });
    },
    ingresoUsuario({ commit }, usuario) {
      console.log(usuario);
      // console.log(usuario); // se recibe user and password
      // post a api enviando los datos
      // extraer id de la empresa y extraer datos de empresa con api
      // los datos devueltas a user y empresa en state

      /**
       * Borrar hasta antes de commit, son solo pruebas
       */
      let userDB;
      let msjErrorLogin;
      if (usuario.user == "user1" && usuario.password == "123") {
        userDB = {
          nombre: "Eduardo",
          empresa_id: 1,
          empresa: "Restobar Carlos",
          establecimiento_id: 1,
          establecimiento: "Damaso Beraun",
          turno: "General",
        };
      } else if (usuario.user == "user2" && usuario.password == "123") {
        userDB = {
          nombre: "Orlando",
          empresa_id: 1,
          empresa: "Restobar Carlos",
          establecimiento_id: 2,
          establecimiento: "General Prado",
          turno: "Mañana",
        };
      } else if (usuario.user == "user1" || usuario.user == "user2") {
        msjErrorLogin = { code: "1", error: "contraseña invalida" };
        return commit("setLoginErrorMsg", msjErrorLogin);
      } else {
        msjErrorLogin = { code: "2", error: "Usuario no encontrado" };
        return commit("setLoginErrorMsg", msjErrorLogin);
      }

      commit("setUser", userDB);
      localStorage.setItem("usuario", JSON.stringify(userDB));
      router.push("/");
    }
  },
  modules: {
  }
})