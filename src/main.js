import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import App from './App.vue';
import Registration from "./components/Registration";
import Login from "./components/Login";
import Main from "./components/Main/Main";
import Users from './components/Users/Users';

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
    {path: '/', component: Main},
    {path: '/users', component: Users},
    {path: '/login', component: Login},
    {path: '/registration', component: Registration}
];
const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')