<template>
  <div class="col-md-6">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" :class="{'active':(activeIndex==index)}" v-for="(o, index) in tabDatas">
        <a :href="'#tabId-'+index" role="tab" data-toggle="tab">
          {{o.title}}
          <span><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button></span>
        </a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div role="tabpanel" :class="{'tab-pane':true,'active':(activeIndex==index)}"  v-for="(o, index) in tabDatas" :id="'tabId-'+index">
        {{o.content}}
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    computed:{
      tabObj(){
        return this.$store.state.BootStap.tab
      },
      activeIndex(){
        return this.tabObj.activeIndex
      },
      tabDatas(){
        return this.tabObj.tabDatas
      }
    },
    methods:{
      
    }
  }
</script>
<style>
  
</style>