<template>
  <div>
    <!-- Standard button -->
    <router-link class="btn btn-default" to="/addUser">添加</router-link>
    <alert/>
    <router-view></router-view>
    <table class="table table-hover">
      <thead>
        <tr><th>用户名</th><th>年龄</th><th>归属地</th><th>操作</th></tr>
      </thead>
      <tbody>
        <tr v-for="(user,index) in userList" v-is-color:index='index'>
          <td @click="showTd(user.username)">{{user.username}}</td>
          <td>{{user.age}}</td>
          <td>{{user.address}}</td>
          <td><a href="javascript:void(-1);" @click="delUser(index)" title="">删除</a></td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
export default {
  computed:{
    userList(){
      return this.$store.state.UserList.userList
    }
  },
  methods:{
    delUser(index){
      this.$store.dispatch("delUser",{index})
      this.$store.dispatch("showAlert",{"msg":"删除成功"})
    }
  }
}
</script>
<style>
  .tr-gray{background-color: #eee;}
</style>
