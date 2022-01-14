<template>
  <div class="home">
    <button @click="getMainState">获取主应用数据</button>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      state: {
        name: '张三',
        age: 14
      }
    }
  },
  methods: {
    getMainState () {
      this.$actions.setGlobalState(this.state)
    }
  }
}
</script>
