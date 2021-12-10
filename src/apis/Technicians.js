import Api from "@/apis/Api";

const END_POINT = "technicians";

export default {
  all(userId) {
    return Api.get(END_POINT + "/" + userId);
  },

  show(id) {
    return Api.get(END_POINT + "/" + id);
  },
};
