<template>
  <div id="app">
    <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Brand</a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><router-link to="/userlist">用户列表</router-link></li>
          <li><router-link to="/personal">个人中心</router-link></li>
          <li><router-link to="/test">测试</router-link></li>
        </ul>
      </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  //store,
  components: {
    
  },
  methods:{
    add(){
      this.$store.commit("increment")
    },
    minus(){
      this.$store.commit("decrement")
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  }
}
</script>
