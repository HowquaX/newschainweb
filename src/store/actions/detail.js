import types from './../types/detail';
import axios from 'axios'
export default {
    [types.getDetail]({commit},id){
      var str = id.id
      var url = 'https://newschain.herokuapp.com/articles/' + str
      console.log(url);
      return axios.get(url,
    ).then(function (response) {
      console.log('success', response)
         commit(types.getDetail,{
             data: response.data.article
         })
    }).catch(function (error) {
      console.log('error', error)
      });
    },
    [types.deriveArticles]({commit},data){
        commit(types.deriveArticles, {
            data: data
        })
    }

}
