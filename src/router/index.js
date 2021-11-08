import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import( '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import('../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/njq',
                    component: () => import( '../components/page/table/njq.vue'),
                    meta: { title: '农经权' }
                },
                {
                    path: '/zjd',
                    component: () => import('../components/page/table/zjd.vue'),
                    meta: { title: '宅基地' }
                },
                {
                    path: '/sdsj',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/table/sdsj.vue'),
                    meta: { title: '三调' }
                } 
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        }
    ]
});
