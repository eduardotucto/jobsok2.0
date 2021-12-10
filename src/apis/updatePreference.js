import Api from "@/apis/Api";

const END_POINT = "update-preference";

export default {
    put(id, dataUpdate) {
        return Api.put(END_POINT + "/" + id, dataUpdate);
    },
};
