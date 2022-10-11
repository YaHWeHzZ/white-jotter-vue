<template>
  <div class="hello">
    <div class="info-type-one">
      <!-- 内容区域 -->
      <div class="">
        测试内容！
      </div>
      <!-- 显示提示区域   内容 -->
      <div class="info-panel-content">
        <!-- 显示提示框区域  三角区域 -->
        <div class="info-panel-triple"></div>
        你好！
      </div>
    </div>

    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    console.log('in helloword')
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.info-type-one {
  width: 120px;
  height: 30px;
  border: 1px solid #eee;
  margin: 0 auto;
  text-align: center;
  line-height: 30px;
}
.info-panel-triple {
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-bottom-color: hsla(0, 0%, 6%, 0.6);
  position: absolute;
  left: 16px;
  top: -16px;
}
.info-panel-content {
  display: inline-block;
  position: relative;
  margin-top: 15px;
  height: 30px;
  line-height: 30px;
  background-color: hsla(0, 0%, 6%, 0.6);
  color: #fff;
  text-align: left;
  padding-left: 15px;
  padding-right: 12px;
  border-radius: 3px;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
}
</style>
