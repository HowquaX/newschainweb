import types from './../types/home';
import qs from 'qs'
import Vue from 'vue';
import axios from 'axios'
Vue.prototype.$http = axios
export default  {
    //获取首页列表数据
   [types.getTopicList]({commit},para){
       const { page = 0, category , type } = para;
       const limit = 30;
       console.log('000');
       // return ajax.get('/topics',{
       //     limit,
       //     tab:category,
       //     page:page
       // }).then(data => {
       //     console.log('111');
       //     const count = data.data.length;
       //     commit(types.getTopicList,{
       //         list:data.data,
       //         page:page,
       //         category:category,
       //         type:type,
       //         isLastPage:count < limit
       //     })
       // })
       // let data = {
       //   email: 'fxc0931@sina.com',
       //   password: '123456'
       // }
       // // let postData = qs.stringify(data)
         return axios.get('https://newschain.herokuapp.com/articles'
       ).then(function (response) {
         console.log('success', response)
         const count = response.data.length;
             commit(types.getTopicList,{
                 list:response.data,
                 page:page,
                 category:'good',
                 type:type,
                 isLastPage:count < limit
             })
       }).catch(function (error) {
         console.log('error', error)
         });
   },
   //储存页面的滚动位置
   [types.savePageScrollY]({commit}, para ){
       const { scrollY ,category } = para;
       commit(types.savePageScrollY,{
           scrollY,category
       });
   }
}
