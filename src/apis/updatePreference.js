import Api from "@/apis/Api";

const END_POINT = "update-preference";

export default {
    put(id) {
        return Api.put(END_POINT + "/" + id, {
            data: [
                {
                    id: 1, // idProfesion tecnico
                    quantity: 1, // click
                },
                {
                    id: 1, // id tecnico
                    quantity: 1, // click
                },
            ],
        });
    },
};
