import Vue from 'vue'
import Button from './button.vue'
import Icon from  './icon.vue'
import ButtonGroup from './zero-button-group.vue'
import Input from './input.vue'
Vue.component('zero-button',Button)
Vue.component('zero-icon',Icon)
Vue.component('zero-button-group',ButtonGroup)
Vue.component('zero-input',Input)
new Vue({
 el:'#app',
 data:{
  loading1:false,
  loading2:false,
  loading3:false
 },
 methods:{
  inputChange(e){
   console.log(e.target.value);
  }
 }
})