<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NavBarHeader/> 
    <Hero/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import NavBarHeader from './components/NavBarHeader.vue'
import Hero from './components/Hero.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    NavBarHeader,
    Hero
  },
  title: 'OKRA'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
