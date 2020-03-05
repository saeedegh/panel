<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    
    <SideBar></SideBar>
    <MainPanel></MainPanel>
  </div>
</template>

<script>

import SideBar from "./components/SideBar.vue";
import MainPanel from "./components/MainPanel";

export default {
  
  components: {
    
    SideBar,
    MainPanel
  }
};
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
