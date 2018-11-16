import types from './../types/user';
import qs from 'qs'
import Vue from 'vue';
import axios from 'axios'
Vue.prototype.$http = axios

export default {
    [types.login]({commit}, data) {
      let postData = qs.stringify(data)
      return axios.post('https://newschain.herokuapp.com/users/login', postData)
      .then(function (response) {
        commit(types.login, {
            data: response.data,
            access_token: response.headers['x-auth']
        });
        // return data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    [types.getUserInfo]({commit}, loginName) {
        return ajax.get(`/user/${loginName}`).then(data => {
            commit(types.getUserInfo, {
                data: data.data,
                loginName: loginName
            });
        });
    },
    [types.getUserMessage]({commit}, token) {
        return ajax.get(`/messages`, {
            accesstoken: token,
            mdrender: true
        }).then(data => {
            commit(types.getUserMessage, {
                data: data.data
            })
        })
    },
    [types.unLogin]({commit}) {
        commit(types.unLogin);
    },
    [types.saveUserPath]({commit}, {pre, next}) {
        commit(types.saveUserPath, {
            pre, next
        });
    },
    [types.deleteUserPath]({commit}, path) {
        commit(types.deleteUserPath, path);
    }
}
