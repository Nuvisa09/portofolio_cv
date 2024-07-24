<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <NavbarComponent msg="Welcome to website"/>

  
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    // HeaderComponent,
    // ContentComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#524C42;
  margin-top: 0;
}
</style>
