<template>
  <div class="col-md-6">
    <ni-radio label="0" v-model="age">18岁</ni-radio>
    <ni-radio label="1" v-model="age">28岁</ni-radio>
    <ni-radio label="2" v-model="age">38岁</ni-radio>
    <hr>
    <ni-checkbox label="1" v-model="hobby">篮球</ni-checkbox>
    <ni-checkbox label="2" v-model="hobby">足球</ni-checkbox>
    <ni-checkbox label="3" v-model="hobby">篮球</ni-checkbox>
    您选择了:{{hobby}}
  </div>
</template>

<script type="text/javascript">
  export default {
    methods:{

    },
    data(){
      return {
        msg:"hello vuejs1",
        age:0,
        hobby:[]
      }
    },
    methods:{
      show(msg){
        alert(msg)
      }
    }
  }
</script>
