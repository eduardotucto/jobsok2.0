import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// own styles
import "./assets/css/etStyle.css";
import "./assets/css/normalize.css";
import "./assets/css/style.css";
// for carousel
import "./assets/css/OwlCorousel/owl.carousel.min.css";
import "./assets/css/OwlCorousel/owl.theme.default.min.css";


// For carousel
import "./assets/js/owlCarousel/owl.carousel.js";


createApp(App).use(store).use(router).mount('#app')
