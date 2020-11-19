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
  font-family: 'Roboto Slab', serif;
  outline: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #263238;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #0277bd;
}
</style>
