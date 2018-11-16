import LazyLoad from '../components/LazyLoad';
export default [
    {
        path: '/topic/:category',
        name: 'topic',
        component: () => import('../views/index.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../views/detail.vue')
    },
    {
        path: '/release/:id',
        name: 'release',
        component: () => import('../views/release.vue'),
        meta: {
            shouldLogin: true
        }
    },
    {
        path: '/user/:loginName',
        name: 'user',
        component: () => import('../views/user.vue')
    },
    {
        path: '/target',
        name: 'targetContent',
        component: () => import('../views/targetContent.vue')
    },
    {
        path: '/marked',
        name: 'marked',
        component: () => import('../views/marked.vue')
    },
    {
        path: '/message',
        name: 'message',
        component: () => import('../views/message.vue'),
        meta: {
            shouldLogin: true
        }
    }
];
