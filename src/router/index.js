import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Home from '../views/home.vue'
import StapleFood from '../views/staple-food.vue'
import Soymilk from '../views/soymilk.vue'
import Vegetables from '../views/vegetables.vue'
import Test from '../components/test.vue'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: { name: "stapleFood" }
    }, {
        path: '/home',
        name: 'home',
        component: Home,
        children: [{
            path: 'stapleFood',
            name: 'stapleFood',
            component: StapleFood
        }, {
            path: 'soymilk',
            name: 'soymilk',
            component: Soymilk
        }, {
            path: 'vegetables',
            name: 'vegetables',
            component: Vegetables
        }]
    }, {
        path: 'test',
        name: 'test',
        component: Test
    }]
})