<template>
  <div id="app">
    <Header></Header>
<<<<<<< HEAD
    <router-view/>
=======
    <div>
      <router-link to="/login">Log In</router-link>
    </div>
    <div class="main-container">
      <div>
        <router-link to="/feed">Feed</router-link>
      </div>
    </div>
    <router-view></router-view>
>>>>>>> 68fbad64b9728c85b97ad7eb93a1902f5a3951b6
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
  color: #263238;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #0277bd;
}

.main-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}
</style>
