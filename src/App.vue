<template>
  <div id="app">
    <Header></Header>
    <div>
      <router-link to="/login">Log In</router-link>
    </div>
    <div>
      <router-link to="/feed">Feed</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
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
  margin-top: 60px;
}
</style>
