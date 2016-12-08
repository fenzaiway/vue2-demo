<template>
  <label class="ni-radio">
      <span class="ni-radio-input"
            :class="{
              'ni-radio-input-checked':checked,
              'ni-radio-input-disabled':disabled
            }"
          >
          <span class="ni-radio-inner"></span>
          <input 
            type="radio"
            :value="label"
            v-model="_value"
            class="ni-radio-default"
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
      value: [String, Number],
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
        return !this.disabled && (this.value == this.label)
      }
    }
  }
</script>
<style>
 .ni-radio-input{
  width: 22px;
  height: 22px;
  border: 1px solid #c0ccda;
  display: block;
  border-radius: 50%;
  float: left;
  margin-right: 5px;
 }

.ni-radio-input-checked{
  background-color: #20a0ff;
}

.ni-radio-input-disabled{
  background-color: #d3dce6;
  border-color: #d3dce6;
}

.ni-radio-inner{
  width: 8px;
  height: 8px;
  border: 0px solid green;
  display: block;
  border-radius: 50%;
  margin: 6px;
  background-color: #fff;
}

.ni-radio-default{
  visibility: hidden
}

</style>