<template>
  <div class="col-md-6">
    <ni-button @click="show(msg)">测试按钮</ni-button>
    <ni-button type="primary">正常按钮</ni-button>
    <ni-button type="success">成功按钮</ni-button>
    <ni-button type="info">信息按钮</ni-button>
    <ni-button-group>
      <ni-button type="warning">告警按钮</ni-button>
      <ni-button type="info">文字按钮</ni-button>
      <ni-button type="success">链接按钮</ni-button>
    </ni-button-group>
  </div>
</template>

<script type="text/javascript">
  export default {
    methods:{

    },
    data(){
      return {
        msg:"hello vuejs1"
      }
    },
    methods:{
      show(msg){
        alert(msg)
      }
    }
  }
</script>
