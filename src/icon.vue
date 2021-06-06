<template>
  <svg class="zero-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
export default {
  name:'zero-icon',
  props:['name']
}
</script>

<style lang="scss" scoped>
.zero-icon {
  width: 1em;
  height: 1em;
}
</style>