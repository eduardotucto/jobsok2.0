import { createStore } from 'vuex'
import Technicians from "@/apis/Technicians"

export default createStore({
  state: {
    user: {
      city: {
        description: ''
      }
    }
  },
  mutations: {
    settingUser(state, payload) {
      state.user = payload
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
    }
  },
  modules: {
  }
})