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
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/basetable',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/table/BaseTable.vue'),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/fxy',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/table/fxy.vue'),
                    meta: { title: '风险源' }
                },
                {
                    path: '/gyyq',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/table/gyyq.vue'),
                    meta: { title: '工业园区' }
                },
                {
                    path: '/wk',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/table/wk.vue'),
                    meta: { title: '尾矿' }
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
