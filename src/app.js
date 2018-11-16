/**
 * Created by jiangtao on 2017/5/17.
 */

import Vue from 'vue';

import Element from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, { size: 'small', zIndex: 3000 });

const {
    $nextTick
} = Vue.prototype;

import {
    App,
    Login,
    TButton,
    THeader,
    ScrollView
} from './components';

import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor)

import Vtip from 'vtip'
import 'vtip/lib/index.min.css'
// 注册指令使用
Vue.use(Vtip.directive)
// 工具函数调用
Vue.prototype.$tip = Vtip.tip

//全局注册组件
Vue.component(`ScrollView`, ScrollView);
Vue.component(`TButton`, TButton);
Vue.component(`THeader`, THeader);

//指令
import './directive';

//网络

import axios from 'axios'

Vue.prototype.$http = axios

import router from './router';

import store from './store';

import PopUp from './components/PopUp';

const $PopUp = new PopUp();

const $openLogin = cb => (
    $PopUp.show(Login, {
        position: `bottom`,
        opacity: 0,
        maskDuration: 300,
        contentDuration: 400,
        disableTapClose: true,
        cubicBezier:`cubic-bezier(.36, .66, .04, 1)`
    }, {success: cb})
);

//通用登录唤起
Vue.prototype.$openLogin = $openLogin;

//通用多功能弹出层
Vue.prototype.$PopUp = $PopUp;

// 开启debug模式
Vue.config.debug = __DEV__;


//全局通用loading
window.loading = () => (
    $PopUp.loading()
);

window.loadingClose = () => (
    $PopUp.loadingClose()
);

//全局获取用户是否登录
window.getUserLogin = () => {
    const {user} = store.state;
    // user.isLogin = false;
    return user.isLogin;
};

Vue.prototype.$getUserLogin = getUserLogin();

router.beforeEach(({meta}, from, next) => $nextTick(() => {
    const isLogin = getUserLogin();
    const {
        shouldLogin = false
    } = meta;
    //检查当当前页面需要登录，如果用户未登录，那么弹起登录页面
    if (shouldLogin && !isLogin) {
        return $openLogin(done => {
            done();
            next();
        });
    }
    next();
}));

new Vue({
    render: (h) => h(App),
    router,
    store
}).$mount('#root');
