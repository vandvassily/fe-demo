import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Alert from './components/Alert/alert.js'
require('normalize.css');

Vue.config.productionTip = false;
Vue.prototype.$Alert = Alert

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
