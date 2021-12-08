import Api from "@/apis/Api";

const END_POINT = "technician";

export default {
  all() {
    return Api.get(END_POINT);
  },

  show(id) {
    return Api.get(END_POINT + "/" + id);
  },
};
