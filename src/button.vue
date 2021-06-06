<template>
  <button class="zero-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <zero-icon v-if="icon&&!loading" :name="icon" class="icon"></zero-icon>
    <zero-icon class="loading icon" name="loading" v-if="loading"></zero-icon>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>
<script>
import Icon from './icon.vue'
export default {
  name:'zero-button',
  // props: ['icon', 'iconPosition']
  components:{
    'zero-icon':Icon
  },
  props: {
    icon:{},
    loading:{
      type:Boolean,
      default: false
    },
    iconPosition:{
      type:String,
      default:'left',
      validator(value){
        return !(value !== 'left' && value !== 'right');
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes loading {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.zero-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
  > .icon{
    order: 1;
    margin-right: .3em;
  }
  > .loading{
    animation: loading 1s infinite linear;
  }
  > .content{
    order: 2;
  }
  &.icon-right {
    > .content{
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: .3em;
      margin-right: 0;
    }
  }
}
</style>