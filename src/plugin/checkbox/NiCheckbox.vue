<template>
  <label class="ni-checkbox">
      <span class="ni-checkbox-input"
            :class="{
              'ni-checkbox-input-checked':checked,
              'ni-checkbox-input-disabled':disabled
            }"
          >
          <span class="ni-checkbox-inner">
            <i class="glyphicon glyphicon-ok"></i>
          </span>
          <input 
            type="checkbox"
            :value="label"
            v-model="_value"
            class="ni-checkbox-default"
            :name="name"
            :disabled="disabled">
            
      </span>
      <span>
        <slot></slot>
      </span>
  </label>
</template>
<script type="text/javascript">
  export default{
    props: {
      value: [Array],
      label: {
        type: [String, Number],
        required: true
      },
      disabled: Boolean,
      name: String
    },
    data(){
      return {
        
      }
    },
    computed:{
      _value:{
        get(){
          return this.value?this.value:this.$parent.value
        },
        set(newValue){
          if (this.value !== undefined) {
            this.$emit('input', newValue);
          } else {
            this.$parent.$emit('input', newValue);
          }
        }
      },
      checked(){
        return !this.disabled && (this.value.indexOf(this.label)>=0)
      }
    }
  }
</script>
<style>
 .ni-checkbox-input{
  width: 22px;
  height: 22px;
  border: 1px solid #20a0ff;
  display: block;
  border-radius: 20%;
  float: left;
  margin-right: 5px;
  
 }

.ni-checkbox-input-checked{
  background: #20a0ff;
}

.ni-checkbox-input-disabled{
  background-color: #d3dce6;
  border-color: #d3dce6;
}

.ni-checkbox-inner{
  width: 8px;
  height: 8px;
  border: 0px solid green;
  display: block;
  margin: 0px 3px;
}
.ni-checkbox-inner i{color:#fff;}

.ni-checkbox-default{
  visibility: hidden
}

</style>