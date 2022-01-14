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
                    path: '/byq_njq',
                    component: () => import( '../components/page/table/byq_njq.vue'),
                    meta: { title: '白银区农经权' }
                },
                {
                    path: '/hnx_njq',
                    component: () => import( '../components/page/table/hnx_njq.vue'),
                    meta: { title: '会宁县农经权' }
                },
                {
                    path: '/jyx_njq',
                    component: () => import( '../components/page/table/jyx_njq.vue'),
                    meta: { title: '靖远县农经权' }
                },
                {
                    path: '/jyx_jbnt',
                    component: () => import( '../components/page/table/jyx_jbnt.vue'),
                    meta: { title: '靖远县基本农田' }
                },
                {
                    path: '/jyx_sd',
                    component: () => import( '../components/page/table/jyx_sd.vue'),
                    meta: { title: '靖远县三调数据' }
                },
                {
                    path: '/jyx_zjd',
                    component: () => import( '../components/page/table/jyx_zjd.vue'),
                    meta: { title: '靖远县宅基地' }
                },
                {
                    path: '/jyx_lqsj',
                    component: () => import( '../components/page/table/jyx_lqsj.vue'),
                    meta: { title: '靖远县两区数据' }
                },
                {
                    path: '/jyx_ld',
                    component: () => import( '../components/page/table/jyx_ld.vue'),
                    meta: { title: '靖远县林地' }
                },
                {
                    path: '/pcq_jbnt',
                    component: () => import( '../components/page/table/pcq_jbnt.vue'),
                    meta: { title: '平川区基本农田' }
                },
                {
                    path: '/pcq_sd',
                    component: () => import( '../components/page/table/pcq_sd.vue'),
                    meta: { title: '平川区三调数据' }
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
