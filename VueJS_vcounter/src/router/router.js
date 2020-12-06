import Vue from 'vue'
import VueRouter from 'vue-router'
import GamePage from '../components/GamePage'
import Seting from '../components/Setting'

Vue.use(VueRouter);

const routes =[
    {
        path: '/',
        name: 'Settings',
        component: Seting
    },
    {
        path: '/game',
        name: 'GamePage',
        component: GamePage,
    }

];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
});

export default router;