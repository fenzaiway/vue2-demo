<template>
<div>
    <div v-show="alertShow" class="alert alert-success" role="alert">
      {{alertMsg}}
    </div>
</div>

</template>

<script type="text/javascript">
  export default {
    computed:{
      alertObj(){
        return this.$store.state.BootStap.alert
      },
      alertShow(){
        return this.alertObj.alertShow
      },
      alertMsg(){
        return this.alertObj.msg
      }
    }
  }
</script>
