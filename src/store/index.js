import Vue from 'vue'
import Vuex from "vuex";

import UserList from './modules/UserList'
import BootStap from './modules/BootStap'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    UserList,
    BootStap
  }
})










// const store = new Vuex.Store({
//   state:{
//     userList:[
//       {username:"111",age:1,address:'cccccc'}
//     ]
//   },
//   mutations:{
//     addUser(state, payload){
//       state.userList.push(payload.user)
//     },
//     delUser(state, payload){
//       state.userList.splice(payload.index,1)
//     }
//   },
//   actions:{
//     addUser (context, payload) {
//       context.commit('addUser',payload)
//     },
//     delUser (context, payload){
//       context.commit('delUser',payload)
//     }
//   }
// })

// export default store