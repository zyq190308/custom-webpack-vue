<template>
  <div>
    {{ msg }}
    <!-- <img src="../assets/imgs/test.jpg" /> -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'i am from home page'
      }
    }
  }
</script>

<style lang="less" scoped>
  div {
    color: #ffffff;
  }
</style>