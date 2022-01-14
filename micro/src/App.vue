<template>
  <div id="app">
    <h2 style="border-top: 1px dashed #ccc; padding-top: 10px;">这里是微应用</h2>
    <p v-if="mainState">获取到的主应用State：<br>{{ mainState }}</p>
    <p v-if="mainAppData">获取到的主应用数据：<br>{{mainAppData}}</p>
    <h3>微应用传值给主应用</h3>
    <div style="display: flex; align-items: center; justify-content: center; ">
      <input type="text" v-model="microInput" placeholder="修改name值" style="height: 18px; margin-right: 10px;" />
      <button @click="sendToMain">传值给主应用</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      mainAppData: null,
      microInput: ''
    }
  },
  computed: {
    mainState () {
      return this.$mainStore.state
    },
    mainUtils () {
      return this.$mainUtils
    }
  },
  mounted () {
    this.$onGlobalStateChange((state, prev) => {
      console.log('微应用传值', state, prev)
      this.mainAppData = state
    })
    console.log('mainState', this.mainState)
    console.log('mainUtils', this.mainUtils)
  },
  methods: {
    sendToMain () {
      const { user } = this.mainAppData
      this.$setGlobalState({
        user: {
          ...user,
          name: this.microInput
        }
      })
    }
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
