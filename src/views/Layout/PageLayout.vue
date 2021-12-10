<template>
    <header class="header">
        <div class="et-container logoAndNav-container">
            <router-link to="/" class="logo">
                <img src="@/assets/images/logo/jobsok.svg" style="height: 40px">
            </router-link>
            <nav class="navigation">
                <ul>
                    <li><router-link to="/">Cliente</router-link></li> |
                    <li><router-link to="/">Propietario</router-link></li> |
                    <li><a style="color: #E55E5E; cursor: pointer" @click="cerrarSesion">Cerrar sesión</a></li>
                    <li class="li-registro"><router-link to="/">{{ user.name }}</router-link></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="main">
        <router-view/>
    </main>

    <footer class="footer">
        <div class="social">
            <a href="#"><i class="icon ion-social-instagram"></i></a>
            <a href="#"><i class="icon ion-social-snapchat"></i></a>
            <a href="#"><i class="icon ion-social-twitter"></i></a>
            <a href="#"><i class="icon ion-social-facebook"></i></a>
        </div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Servicios</a></li>
                <li class="list-inline-item"><a href="#">Acerca de</a></li>
                <li class="list-inline-item"><a href="#">Terminos</a></li>
                <li class="list-inline-item"><a href="#">Politicas de privacidad</a></li>
            </ul>
            <p class="copyright">Jobsok © 2021</p>
    </footer>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    methods: {
        ...mapActions(['cerrarSesion'])
    },
    computed: {
        ...mapState(['user'])
    },
}
</script>


<style>
.header {
    background-color: #ffffff;
    border-bottom: .3rem solid #0A5990;
}
.et-container {
    width: 85%;
    max-width: 1050px;
    margin: 0 auto; /* Center horizontally */
}
.et-container.logoAndNav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 0;
}

.navigation ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.navigation ul li { display: inline-block }
.navigation ul li a {
    display: block;
    padding: 0 1rem;
    text-decoration: none;
    color: #0058A2;
}


.li-registro a{
    background: #E55E5E;
    transition: .3s;
    border-radius: .3rem;
    padding: .7rem !important;
    color: #F6F6F6 !important;
}
.li-registro a:hover{
    background: #DF3939;
}


.main { min-height: calc(100vh - 130px) }

.footer {
    background-color: #ffffff;
    border-top: .3rem solid #0A5990;
    padding:40px 0;
}

    .footer .social {
        text-align:center;
        padding-bottom:25px;
    }

    .footer .social > a {
        background: #0A5990;
        font-size:24px;
        width:40px;
        height:40px;
        line-height:40px;
        display:inline-block;
        text-align:center;
        border-radius:50%;
        border:1px solid #ccc;
        margin:0 8px;
        opacity:0.85;
    }

    .footer .social > a i {
        color: #ffffff;
    }

    .footer .social > a:hover {
        opacity: 1;
    }

    .footer .list-inline {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0;
    }

    .footer ul {
        padding:0;
        list-style:none;
        text-align:center;
        font-size:18px;
        line-height:1.6;
        margin-bottom:0;
    }

    .footer li {
        padding:0 10px;
    }

    .footer ul a {
        color:inherit;
        text-decoration:none;
        opacity:0.8;
    }

    .footer ul a:hover {
        opacity:1;
    }

    .footer .copyright {
        margin-top:15px;
        text-align:center;
        font-size:13px;
        color:#aaa;
        margin-bottom:0;
    }

/* 
a.router-link-exact-active {
  color: #5da3d8;
} */
</style>