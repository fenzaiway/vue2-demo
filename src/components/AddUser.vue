<template>
  <div>
    <router-link class="btn btn-default" to="/userlist">返回</router-link>
    <form class="form-horizontal" role="form">
      <div class="form-group">
        <label for="username" class="col-sm-2 control-label">用户名</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="user.username" id="username" placeholder="用户名">
        </div>
      </div>
      <div class="form-group">
        <label for="age" class="col-sm-2 control-label">年龄</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="user.age" id="age" placeholder="年龄">
        </div>
      </div>
      <div class="form-group">
        <label for="address" class="col-sm-2 control-label">归属地</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="user.address" id="address" placeholder="归属地">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" @click="addUser()" class="btn btn-default">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods:{
    addUser(){
      this.$store.dispatch('addUser',{user:this.user})
      this.$store.dispatch("showAlert",{"msg":"添加成功"})
      this.emptyUser()
    },
    emptyUser(){
      this.user = {
        username:"",
        age:"",
        address:""
      }
    },

  },
  //methods:mapActions(['addUser']),
  data(){
    return {
      user:{
        username:"",
        age:"",
        address:""
      }
    }
  }
}
</script>