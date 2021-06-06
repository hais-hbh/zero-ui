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

//单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
{
 const Constructor = Vue.extend(Button)
 const vm = new Constructor({
  propsData:{
   icon:'setting'
  }
 }).$mount()
 const useElement =vm.$el.querySelector('use')
 expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
 vm.$destroy()
}
{
 const Constructor = Vue.extend(Button)
 const vm = new Constructor({
  propsData:{
   icon:'setting',
   loading:true
  }
 }).$mount()
 const useElements =vm.$el.querySelectorAll('use')
 expect(useElements.length).to.equal(1)
 expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
 vm.$destroy()
}
{
 const div = document.createElement('div')
 document.body.appendChild(div)
 const Constructor = Vue.extend(Button)
 const vm = new Constructor({
  propsData:{
   icon:'setting',
  }
 }).$mount(div)
 const icon =vm.$el.querySelector('svg')
 expect(getComputedStyle(icon).order).to.equal('1')
 vm.$el.remove()
 vm.$destroy()
}
{
 const div = document.createElement('div')
 document.body.appendChild(div)
 const Constructor = Vue.extend(Button)
 const vm = new Constructor({
  propsData:{
   icon:'setting',
   iconPosition:'right'
  }
 }).$mount(div)
 const icon =vm.$el.querySelector('svg')
 expect(getComputedStyle(icon).order).to.equal('2')
 vm.$el.remove()
 vm.$destroy()
}
{
 const Constructor = Vue.extend(Button)
 const vm = new Constructor({
  propsData:{
   icon:'setting',
  }
 }).$mount()
 let spy = chai.spy(function (){})
 vm.$on('click',spy)
 vm.$el.click()
 expect(spy).to.have.been.called()
}

