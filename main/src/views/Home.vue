<template>
  <div class="home">
    <button @click="getMainState">传递主应用数据给微应用</button>
    <p>主应用的数据：{{user}}</p>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      user: {
        name: '张三',
        age: 14
      }
    }
  },
  mounted () {
    this.initToken()
    console.log(this.$qkActions)
    this.$qkActions.onGlobalStateChange((state, prev) => {
      this.user = state.user
    })
  },
  methods: {
    getMainState () {
      this.$qkActions.setGlobalState({ user: this.user })
    },
    initToken () {
      this.$store.commit('setToken', 'abc')
    }
  }
}
</script>
