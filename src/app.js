import Vue from 'vue'
import Button from './button.vue'
import Icon from  './icon.vue'
Vue.component('zero-button',Button)
Vue.component('zero-icon',Icon)
new Vue({
 el:'#app',
 data:{
  loading1:false,
  loading2:false,
  loading3:false
 }
})