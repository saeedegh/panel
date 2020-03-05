import Vue from 'vue'
import App from './App.vue'
import vueResource from "vue-resource";
// import axios from 'axios'


Vue.use(vueResource);
// Vue.use(axios);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')