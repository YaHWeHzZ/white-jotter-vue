<template>
  <div class="bg">
    Hello World!
    <!-- 路由插槽 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AppIndex',
  mounted() {
    console.log('in home')
  }
}
</script>

<style scoped>
.bg {
  bottom: 0;
}
</style>
