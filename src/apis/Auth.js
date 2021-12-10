import Api from "@/apis/Api";

const END_POINT = "login";

export default {
  login(credentials) {
    return Api.post(END_POINT, credentials);
  },
};
