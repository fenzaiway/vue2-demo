//隔行换色表格插件
import alert from '../components/alert'
import Tab from '../components/Tab'
const BootStap = {
  install: function(Vue, options){
    
    Vue.directive('is-color',{
        bind(el, binding, vnode, oldVnode){
          let value = binding.value
          let isOdd = value%2==0?false:true
          if(isOdd){
            el.setAttribute("class", "tr-gray"); 
          }
        }
    })


    Vue.mixin({
      methods:{
        showTd(data){
          console.log(data);
        }
      },
      components:{alert,Tab}
      
    })






  }
}
export default BootStap
