<template>
    <div class="auth-form-img-form">
        <div class="auth-form">
            <h2 style="text-align:center">Inicia sesion</h2>
            <div v-if="msgLoginError" class="err-login">
                <span>Sus credenciales son incorrectas.</span>
            </div>
            <form class="login-form" @submit.prevent="procesarFormulario">
                <div class="label-and-input">
                    <label 	class="et-label" for="userEmail">Correo</label>
                    <input	class="et-input"
                            type="text" autocomplete="off"
                            id="userEmail" placeholder="Inserte correo"
                            v-model="user">
                </div><!-- Correo -->
                <div class="label-and-input">
                    <label 	class="et-label" for="userPass">Contraseña</label>
                    <input	class="et-input"
                            type="password" autocomplete="off"
                            id="userPass" placeholder="Inserte contraseña"
                            v-model="password">
                </div><!-- Contraseña -->
                <button class="et-button logIn-button" type="submit">Iniciar sesión</button>
            </form>
            <p class="span__caption">¿No tienes una cuenta?
                <a href="#">
                    Regístrate gratis
                </a>
            </p>
        </div>
        <div class="auth-img">
            <img src="@/assets/images/login/stock-vector.jpg">
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store'

export default {
    data() {
        return {
            user: '',
            password: '',
        }
    },
    methods: {
        procesarFormulario() {
			const credentials ={'email': this.user,'password': this.password}
			store.dispatch('ingresoUsuario',credentials) // triggering action from store
		}
    },
    computed: {
		...mapState(['msgLoginError'])
    },
}
</script>

<style>
.auth-form-img-form {
    /* centrate */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* Sizing */
    width: 950px;
    height: 600px;

    /* Styling */
    overflow: auto;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 0px 30px -11px rgba(0, 0, 0, 0.20);

    /* Grid */
    display: grid;
    grid-template-columns: 1fr 1fr;
}
    .auth-form {
        justify-self: center;
        align-self: center;
        width: 70%;
    }
        .err-login {
            background: #df131330;
            height: 3rem;
            font-size: .9em;
            display: flex;
            padding: 15px;
            align-items: center;
            border-radius: 6px;
        }
        .login-form {
            display: grid;
            gap: 15px;
            grid-template-columns: 1fr;
        }
            .logIn-button {
                transition: .3s;
                margin-top: 10px;
                height: 2.5rem;
                background: #2E77BC;
                color: #ffffff;
                cursor: pointer;
            }
        .span__caption {
            text-align: center;
            margin: 10px 0;
            font-size: .95em;
        }
        .span__caption a { text-decoration: none }
        .span__caption a:hover { text-decoration: underline }

    .auth-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


</style>