import Vue from 'vue'
import VueRouter from "vue-router"

//引入组件
import UserList from "./components/UserList";
import Personal from "./components/Personal";
import AddUser from "./components/AddUser";
import test from "./components/test";
import renderTest from "./components/renderTest";


Vue.use(VueRouter)

const routes = [
  {
    path:'/userlist',
    component:UserList,
    children:[
      {
        path:'/addUser',
        component:AddUser,
      }
    ]
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/test',
    component:test
  },
  {
    path:'/render',
    component:renderTest
  }
]

const router = new VueRouter({
  routes
})

export default router