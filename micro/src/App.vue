<template>
  <div id="app">
    <h1>这里是微应用</h1>
    <p v-if="mainAppData">获取到的主应用数据：<br>{{mainAppData}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      mainAppData: null
    }
  },
  mounted () {
    this.$onGlobalStateChange((state, prev) => {
      this.mainAppData = state
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
