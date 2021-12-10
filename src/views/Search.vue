<template>
    <div class="search">
        <div class="sidebar">
            <section class="et-card section__minibanner-guaranteed">
                <div class="guaranteed-title">
                    <img src="@/assets/images/verified.png">
                    <span>
                        Garantía
                    </span>
                </div>
                <div class="guaranteed-body">Reserve un técnico garantizado y sus proyectos estarán cubiertos durante 12 meses</div>
            </section>
            <span>Ciudad de preferencia: <b>{{ user.city.description }}</b></span>
        </div>
        <div class="results-container">
            <!-- Lista de técnicos -->
                <section class="section__recomended-technicians">
                    <span class="section__title">Aqui nuestros tecnicos mejores valorados en <b>{{ category }}</b></span>
                    <div class="recomended-technicians">
                        <div v-for="technician in techniciansList" :key="technician.id" class="et-card technician-card" @click="goToTechnician(technician)">
                            <div class="avatar-and-verified">
                                <img :src="`https://ui-avatars.com/api/?name=${technician.name}`">
                                <!-- <div v-if="technician.have_warranty" class="guaranteed-icon">
                                    <img src="@/assets/images/verified.png">
                                    <span>Garantizado</span>
                                </div> -->
                            </div>
                            <div class="technician-data">
                                <span>
                                <b>{{ technician.name }} {{ technician.last_name }}</b><img src="@/assets/images/verified.png">
                                </span>
                                <p style="margin: .2rem 0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </svg>
                                    {{ technician.address }}
                                </p>
                                <p style="margin: .2rem 0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-inbound-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/>
                                    </svg>
                                    {{ technician.phone }}
                                </p>
                            </div>
                            <!-- <p>
                                <ul>
                                    <li v-for="profession in technician.professions" :key="profession.id">
                                        {{ profession.description }}
                                    </li>
                                </ul>
                            </p> -->
                        </div>
                    </div>
                </section>
        </div>
    </div>
</template>

<script>
import Technicians from "@/apis/Technicians"
import updatePreference from "@/apis/updatePreference"
import { mapState } from 'vuex'

export default {
    data() {
        return {
            category: '',
            techniciansList: []
        }
    },
    methods: {
        getOccupations(){
            let x = 0
            Technicians.all(this.user.id)
            .then((resp) => {
                resp.data.technicians.forEach(technician => {
                    technician.professions.forEach(profession => {
                        if (profession.id == this.$route.params.idCategory) {
                            this.techniciansList.push(technician)
                            this.category = profession.description;
                        }
                    });
                });
            }).catch((err) => {
                console.log(err.message)
            });
        },
        goToTechnician(technician){
            let data = []
            technician.professions.forEach(profession => {
                data.push({
                    id: profession.id,
                    quantity: 1,
                })
            })
            const dataUpdate = {
                'data': [...data]
            }
            updatePreference.put(this.user.id, dataUpdate)
            .then((resp) => {
                console.log(resp.data)
            }).catch((err) => {console.log(err.message)});
            this.$router.push({ name: 'technician', params: { idTechnician: technician.id } });
        },
    },
    computed: {
        ...mapState(['user'])
    },
    created () {
        this.getOccupations();
    },
}
</script>

<style>
.search {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 50px;
    width: 85%;
    max-width: 1050px;
    margin: 1.5rem auto 0 auto; /* Center horizontally */
}
    .section__minibanner-guaranteed {
        margin: 0 0 2rem 0;
        background-image: url('../assets/images/guaranteed-background.jpg');
        background-position-x: 75%;
        background-position-y: center;
        background-size: initial;
        background-repeat: no-repeat;
        background-color: #fff;
        border-radius: 8px;
        padding: 20px;
        width: 100%;
    }
        .guaranteed-title {
            display: flex;
            gap: 10px;
            font-size: 1.2rem;
            margin-bottom: 8px;
        }
        .guaranteed-body {
            padding-right: 60px;
        }

.section__recomended-technicians {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr;
}
    .section__title {
        font-size: 1.5rem;
        font-family: "Poppins";
    }
    .recomended-technicians {
        display: grid;
        gap: 10px;
        /* grid-template-columns: repeat(auto-fit, minmax(18rem, auto)); */
        grid-template-columns: 1fr;
        margin-bottom: 3rem;
    }
    .technician-card{
        cursor: pointer;
        display: grid;
        grid-template-columns: 100px 1fr;
    }
        .avatar-and-verified {
            grid-column: 1 / span 1;
            grid-row: 1 / span 2;
            display: flex;
            align-items: end;
        }
            .guaranteed-icon {
                margin: 0 0 0 10px;
                display: grid;
                grid-template-columns: auto auto;
                gap: 5px;
                align-items: center;
            }
</style>