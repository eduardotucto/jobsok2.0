<template>
    <div class="technician">
        <div class="et-container">
            <div class="et-card">
                <span class="technician-data tittle-name">{{ technicianData.name }} {{ technicianData.last_name }}</span> <br>
                <span class="technician-data">
                    Ubicado en: {{ technicianData.address }} - {{ technicianData.city.description }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import Technician from "@/apis/Technician"


export default {
    data() {
        return {
            technicianData: {}
        }
    },
    methods: {
        getTechnitianData(id) {
            Technician.show(id)
            .then((resp) => {
                this.technicianData = resp.data.technician
                console.log(resp.data.technician)
            }).catch((err) => {
                console.log(err.message)
            });
        }
    },
    created () {
        this.getTechnitianData(this.$route.params.idTechnician);
    },
}
</script>

<style>
.technician {
    margin-top: 2rem;
}
.et-container {
    width: 85%;
    max-width: 1050px;
    margin: 0 auto; /* Center horizontally */
}

.tittle-name {
    font-size: 2.6rem;
}
</style>