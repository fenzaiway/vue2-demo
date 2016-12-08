<template>
  <button type="button" @click="clickHandler()" :class="classObj">
      <slot></slot>
  </button>
</template>
<script type="text/javascript">
  export default {
    props:{
      type:{
        type:String,
        default:"default"
      },
      click:{
        type:Function
      }
    },
    computed:{
      classObj(){
        let btnType = this.btnType
        let obj = {
          btn:true
        }
        obj[btnType]=true;
        return obj
      },
      btnType(){
        return 'btn-' + this.type
      }
    },
    methods:{
      clickHandler(evt){
        this.$emit('click', evt);
      }
    }
  }
</script>

<style>
  .btn{margin: 5px 0px;}
  .btn-text{
    border: 0px;
    background: #fff;
    color: #20a0ff;
  }
  .btn-text:hover{
    transition: color 0.5s;
    color: #31b0d5;
  }
</style>