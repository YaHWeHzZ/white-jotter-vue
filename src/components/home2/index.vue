<template>
  <div class="bg">
    Hello World2!
    <!-- 路由插槽 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home2',
  mounted() {
    console.log('in home2')
  }
}
</script>

<style scoped>
.bg {
  bottom: 0;
}
</style>
