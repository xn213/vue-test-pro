<template>
  <div>
    <h2>eventBus:</h2>
    <com-a></com-a>
    <com-b></com-b>
    <com-c></com-c>
  </div>
</template>

<script>
import comA from './comA'
import comB from './comB'
import comC from './comC'
export default {
  name: '',
  components: { comA, comB, comC }
}
</script>

<style lang="scss" scoped></style>
