import Vue from 'vue'
import Vuex from 'vuex'
import {login,validate} from '../api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:''
  },
  mutations: {
    setUsername(state,username){
      state.username = username
    }
  },
  actions: {
    async login({commit},username){
      console.log(3333);
      let res = await login(username);
      if(res.code ===1){
        return Promise.reject(res)
      }else{
        commit('setUsername',res.username)
        localStorage.setItem('token',res.token)
      }
    },
    async validate({commit}){
      let flag = await validate();
      if(flag.code ===1){
        return false
      }
      localStorage.setItem('token',flag.token);
      commit('setUsername',flag.username);
      return true
    }
  },
  modules: {
  }
})
