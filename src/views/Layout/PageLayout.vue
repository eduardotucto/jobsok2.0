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
                    <li><router-link to="/">Oficios</router-link></li>
                    <li class="li-registro"><router-link to="/">{{ user.name }}</router-link></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="main">
        <router-view/>
    </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
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


/* 
a.router-link-exact-active {
  color: #5da3d8;
} */
</style>