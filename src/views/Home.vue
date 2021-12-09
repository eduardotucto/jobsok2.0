<template>
    <div class="home">
        <div class="home-banner">
            <div class="backgd-blue"></div>
            <img class="img-man-paiting" src="@/assets/images/man-painting.svg">
            <div class="banner-contend">
                <div class="text">
                    <span class="text__tittle">¿Buscando un técnico de confianza?</span><br>
                    <span class="text__subtittle">Encuentre recomendaciones en las que pueda confiar</span>
                </div>
                <form class="form__banner-contend">
                    <input type="text" placeholder="Especialidad (ej. electricista)">
                    <button type="submit" class="et-button button__banner-contend" role="button">Buscar</button>
                </form>
            </div>
        </div>
        <div class="home-body">
            <div class="et-container">
                <section class="section__carousel">
                    <h4 class="section__title">Explora nuestras categorías más populares</h4>
                    <div class="owl-carousel owl-theme">
                        <div v-for="occupation in occupationsList" :key="occupation.id" class="et-card carousel-item">
                            <div class="card--body">
                                <img class="img__occupation" :src="require(`@/assets/images/occupations/${occupation.description}.svg`)">
                                {{ occupation.description }}
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section__recomended-technicians">
                    <h4 class="section__title">Aqui nuestros tecnicos reconocidos en tu ciudad - {{ user.city.description }}</h4>
                    <div class="recomended-technicians">
                        <div v-for="technician in techniciansList" :key="technician.id" class="et-card technician-card" @click="goToTechnician(technician)">
                            <div class="avatar-and-verified">
                                <img :src="`https://ui-avatars.com/api/?name=${technician.name}`">
                                <div v-if="technician.have_warranty" class="guaranteed-icon">
                                    <img src="@/assets/images/verified.png">
                                    <span>Garantizado</span>
                                </div>
                            </div>
                            <hr>
                            <span>{{ technician.name }}</span>
                            <p style="width: 13rem; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; margin: .2rem 0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                {{ technician.address }}
                            </p>
                            <p style="width: 13rem; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; margin: .2rem 0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-inbound-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/>
                                </svg>
                                {{ technician.phone }}
                            </p>
                            <p>
                                <ul>
                                    <li v-for="profession in technician.professions" :key="profession.id">
                                        {{ profession.description }}
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </div>
</template>

<script>
import Technicians from "@/apis/Technicians"
import { mapState } from 'vuex';

export default {
    name: 'Home',
    data() {
        return {
            occupationsList: [],
            techniciansList: []
        }
    },
    methods: {
        getOccupations(){
            Technicians.all()
            .then((resp) => {
                this.occupationsList = resp.data.professions;
                console.log(resp.data.professions);
                this.techniciansList = resp.data.technicians;
                this.initializeCarousel();
            }).catch((err) => {
                console.log(err.message)
            });
        },
        initializeCarousel() {
            $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin: 10,
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 2
                  },
                  600: {
                    items: 4
                  },
                  1000: {
                    items: 5
                  }
                }
              })
            })
        },
        goToTechnician(technician){
            console.log(technician);
            const dataUpdate = {
                "data": [
                    {
                        id: technician.professions, // idProfesion tecnico
                        quantity: 1, // click
                    },
                    {
                        id: 1, // id tecnico
                        quantity: 1, // click
                    },
                ]
            }
            this.$router.push({ name: 'technician', params: { idTechnician: technician.id } });
        }
    },
    mounted () {
        this.getOccupations();
    },
    computed: {
        ...mapState(['user'])
    },
}
</script>

<style scoped>
.home-banner{
    display: grid;
    grid-template-columns: minmax(0%, 20%) auto 1fr;
    align-items: center;
}
.backgd-blue {
    background: #0A629F;
    height: 100%;
}
.img-man-paiting {
    width: 450px;
}
.banner-contend {
    margin-left: -100px;
}
.text__tittle {
    font-size: 3.2rem;
    font-family: "Poppins-Medium";
}
.form__banner-contend{
    margin-top: 1.5rem;
    display: flex;
}
.form__banner-contend input{
    width: 65%;
    margin-right: 15px;
    border: 1px solid #444444;
    padding: 0 0 0 .8rem;
    transition: .3s;
    outline: none;
    border-radius: .4rem;
}
    .form__banner-contend input:focus{
        border: 1px solid #111111;
    }

.button__banner-contend {
    background: #E55E5E;
    transition: .3s;
    border-radius: .3rem;
    padding: .7rem !important;
    color: #F6F6F6 !important;
    cursor: pointer;
}
.home-body {
    margin-top: 2rem;
}
.et-container {
    width: 85%;
    max-width: 1050px;
    margin: 0 auto; /* Center horizontally */
}
.section__title {
    font-size: 1.5rem;
    font-family: "Poppins";
}

.technician-card {
    cursor: pointer;
}
.carousel-item {
    margin: .3rem .1rem;
}
.card--body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.img__occupation {
    height: 50px;
    width: 50px;
}

.recomended-technicians {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(14rem, auto));
    margin-bottom: 3rem;
}
.avatar-and-verified {
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