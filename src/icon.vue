<template>
  <svg class="zero-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
export default {
  props:['name']
}
</script>

<style lang="scss">
.zero-icon {
  width: 1em;
  height: 1em;
}
</style>