<template>
  <div>
    <tab/>
  </div>
</template>

<script type="text/javascript">
  export default {
    created(){
      this.$store.dispatch("renderTab",this.tabObj)
    },
    data(){
      return {
        tabObj:{
          activeIndex:1,
          tabDatas:[
            {
              title:'国内新闻',
              content:'XXXXXX个i跑呢你新闻'
            },
            {
              title:'国际新闻',
              content:'XXXXXX个i跑呢你万绮雯打开去唔去去我的脾气韦多情五敌疲我打去玩的去哦魏都区欧文普秦卫东普去外婆新闻'
            },
            {
              title:'经济学',
              content:'悭得就悭哦我到家可辣废弃物几分钱'
            }
          ]
        }
      }
    }
  }
</script>
