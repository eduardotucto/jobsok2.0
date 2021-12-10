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

                <!-- Carousel -->
                <section class="section__carousel">
                    <h4 class="section__title">Explora nuestras categorías más populares</h4>
                    <div class="owl-carousel owl-theme">
                        <div v-for="occupation in occupationsList" :key="occupation.id" class="et-card carousel-item" @click="goSearchByCategory(occupation.id)">
                            <div class="card--body">
                                <img class="img__occupation" :src="require(`@/assets/images/occupations/${occupation.description}.svg`)">
                                {{ occupation.description }}
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Mini banner -->
                <section class="et-card section__minibanner-guaranteed">
                    <div class="guaranteed-title">
                        <img src="@/assets/images/verified.png">
                        <span>
                            Garantía
                        </span>
                    </div>
                    <div class="guaranteed-body">Reserve un técnico garantizado y sus proyectos estarán cubiertos durante 12 meses</div>
                </section>

            </div>
        </div>
    </div>
</template>

<script>
import Technicians from "@/apis/Technicians"
import { mapState } from 'vuex';
import router from "@/router";

export default {
    name: 'Home',
    data() {
        return {
            occupationsList: [],
        }
    },
    methods: {
        getOccupations(){
            Technicians.all(this.user.id)
            .then((resp) => {
                this.occupationsList = resp.data.professions;
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
        },
        goSearchByCategory(id){
            router.push({ name: 'search', params: { idCategory: id } })
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
    cursor: pointer;
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

.section__minibanner-guaranteed {
    margin: 1.5rem 0 2rem 0;
    background-image: url('../assets/images/guaranteed-background.jpg');
    background-position-x: right;
    background-position-y: center;
    background-repeat: no-repeat;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
}
    .guaranteed-title {
        display: flex;
        gap: 10px;
        /* justify-content: center; */
        font-size: 1.2rem;
        margin-bottom: 8px;
    }
</style>