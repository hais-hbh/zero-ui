<template>
<div class="col" :class="[span&&`col-${span}`,offset&&`offset-${offset}`]"
     :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"
>
  <div style="border: 1px solid black;height: 100px"></div>
  <slot></slot>
</div>
</template>
<script>
export default {
  name:'zero-col',
  props:{
    span:{
      type:[Number,String]
    },
    offset:{
      type:[Number,String]
    },

  },
  data(){
    return {
      gutter: 0
    }
  },
  mounted(){

  }
}
</script>
<style lang="scss" scoped>
.col{

  width: 50%;


  $class-prefix: col- ;

  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%;
    }
  }
  $class-prefix: offset- ;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%;
    }
  }
}
</style>