import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

import VueRouter from 'vue-router';
import Routes from '@/Router/index.js';



Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.use(VueRouter);
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCFP0TG7muhIZnc0gkqo_7kg6lYdtBt9_g',
        libraries: 'places',
    }
});

const router = new VueRouter({
    routes: Routes,
    mode: 'history',
    linkActiveClass: 'vue-school-active-link'
})

new Vue({
    vuetify,
    render: h => h(App),
    router: router
}).$mount('#app')