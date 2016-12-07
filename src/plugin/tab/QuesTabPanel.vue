<template>
  <div role="tabpanel" :class="{'tab-pane':true,'active':isActive}" :id="id">
        <slot></slot>
  </div>
</template>
<script type="text/javascript">
  export default {
    props:{
      label: {
        type: String,
        required: true
      },
      id:{
        type:String,
        required:true
      }
    },
    computed:{
      isActive(){
        return this.$parent.activeName==this.id
      }
    }
  }
</script>