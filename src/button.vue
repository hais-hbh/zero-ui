<template>
  <button class="zero-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  props: ['icon', 'iconPosition']
}
</script>
<style lang="scss">
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