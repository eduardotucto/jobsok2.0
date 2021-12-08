import Api from "@/apis/Api";

const END_POINT = "technicians";

export default {
  all() {
    return Api.get(END_POINT + "/" + 1);
  },

  show(id) {
    return Api.get(END_POINT + "/" + id);
  },
};
