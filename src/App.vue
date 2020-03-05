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
@import './assets/style.css';
@import './assets/style2.css'
</style>
