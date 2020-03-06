import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
// import axios from 'axios'


// import './assets/js/core/jquery.min.js'
// import './assets/js/core/popper.min.js'
// import './assets/js/core/bootstrap-material-design.min.js'
// import './assets/js/plugins/bootstrap-notify.js'
// import './assets/js/material-dashboard.min.js?v=2.1.0'
// import './assets/js/plugins/pagination.s.min.js'




Vue.use(vueResource);
// Vue.use(axios);




Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')