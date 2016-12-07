<script type="text/javascript">
  export default{
    name:'ques-tab',
    props:{
      activeId: String
    },
    data(){
      return {
        children:null,
        activeName:"",
        index:0
      }
    },
    mounted() {
      //this.currentName = this.activeName || this.$children[0].index || '1';
      this.$nextTick(() => {
        this.$forceUpdate();
      });
    },
    render(h){
      let {
        activeId,
        index
      } = this
      const tabs = this.$children.map((tab, index) => {
        if(this.activeId == tab.id){
          this.index = index
          this.activeName = tab.id
        }
        const _tab = h('li',{
          class:{
            active:(index==this.index)
          },
          ref: 'quesTab',
          attrs:{
            role:'presentation'
          },
          on:{
            click:()=>{
              this.activeName = tab.id
            }
          }
        },[
          h('a',{
            attrs:{
              href:'index-'+index,
              role:"tab",
              'data-toggle':"tab"
            }
          },[tab.label])
        ])
        return _tab
      })
      return (
        <div>
          <ul class="nav nav-tabs" role="tablist">
            {tabs}
          </ul>
          <div class="tab-content">
            {this.$slots.default}
          </div>
        </div>
      )
    }
  }
</script>