const state = {
  userList:[
      {username:"111",age:1,address:'cccccc'}
    ]
}

const mutations = {
  addUser(state, payload){
    state.userList.push(payload.user)
  },
  delUser(state, payload){
    state.userList.splice(payload.index,1)
  }
}

const actions = {
  addUser (context, payload) {
    context.commit('addUser',payload)
  },
  delUser (context, payload){
    context.commit('delUser',payload)
  }
}

const getters = {
  userList : state => state.userList
}

export default {
  state,
  actions,
  mutations,
  getters
}