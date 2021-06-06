import Vue from 'vue'
import Button from './button.vue'
import Icon from  './icon.vue'
import ButtonGroup from './zero-button-group.vue'
Vue.component('zero-button',Button)
Vue.component('zero-icon',Icon)
Vue.component('zero-button-group',ButtonGroup)
new Vue({
 el:'#app',
 data:{
  loading1:false,
  loading2:false,
  loading3:false
 }
})