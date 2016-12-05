const state = {
  alert:{
    alertShow:false,
    msg:''
  },
  tab:{
    activeIndex:0,
    tabDatas:[
      {
        title:'',
        content:''
      }
    ]
  }
}

const actions = {
  showAlert({commit, state},payload){
    commit("showAlert",payload)
  },
  renderTab({commit, state},payload){
    commit("renderTab",payload)
  }
}

const mutations = {
  showAlert(state,payload){
    state.alert.alertShow = true
    state.alert.msg = payload.msg
    if(state.alertT){
      clearTimeout(state.alertT)
    }
    state.alertT = setTimeout(function(){
      state.alert.alertShow = false;
    },3000)
  },
  renderTab(state, payload){
    state.tab.activeIndex = payload.activeIndex || 0
    state.tab.tabDatas = payload.tabDatas
  }
}

export default {
  state,
  actions,
  mutations
}