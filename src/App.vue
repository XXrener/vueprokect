<template>
  <div id="app">
    <router-link to='hot'></router-link>
    <router-view></router-view>
    <!-- <router-link to="satart"></router-link> -->
    
  </div>
</template>

<script>
import './assets/css/basic.scss'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>