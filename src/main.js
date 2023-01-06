import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Cookies from 'js-cookie'

// Cookies.set('foo', 'bar')
Vue.prototype.$Cookies = Cookies

//用户不需要登录权限去的路由
const whiteList = ['/']

router.beforeEach(async (to,from,next)=>{

    if(whiteList.includes(to.path)){ //如果用户要去的路由包含在不需要权限的路由就直接给过
        return next()
    }

    let flag = await store.dispatch('validate'); //校验token
    console.log(flag);

    if(flag){ //如果登录过
        if(to.path === '/login'){ //看是否去登录页面
            next('/') //如果是就去首页
        }else{
            next(); //如果不是，想去哪去哪
        }
    }else{ //如果没有登录过
        const flag = to.matched.some(item => item.meta.needLogin); //匹配要去的路由及其子路由是否有需要验证的登录信息的
        console.log('123456:',flag);
        if(flag){ //如果有，跳到登录页面
            next('/login')
        }else{ //如果没有，想去哪去哪
            next()
        }
    }
})

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
