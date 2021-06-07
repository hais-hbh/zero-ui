import Vue from 'vue'
import Button from './button.vue'
import Icon from  './icon.vue'
import ButtonGroup from './zero-button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
Vue.component('zero-button',Button)
Vue.component('zero-icon',Icon)
Vue.component('zero-button-group',ButtonGroup)
Vue.component('zero-input',Input)
Vue.component('zero-row',Row)
Vue.component('zero-col',Col)
new Vue({
 el:'#app',
 data:{
  loading1:false,
  loading2:false,
  loading3:false,
  message:'hi'
 },
 methods:{
  inputChange(e){
   console.log(e.target.value);
  }
 }
})