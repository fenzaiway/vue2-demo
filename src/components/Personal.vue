<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <div>
          <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleselect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">分类</template>
            <el-menu-item index="2-1">前端</el-menu-item>
            <el-menu-item index="2-2">后端</el-menu-item>
            <el-menu-item index="2-3">数据库。。。。。。。</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">关于我们</el-menu-item>
        </el-menu>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
    methods:{
      handleselect(){
        console.log('test');
      }
    }
}
</script>

