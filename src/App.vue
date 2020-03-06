<template>
  <div id="app">
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

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons');
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css');
@import url('./assets/css/markazi-persian-fonts.css');
@import url('./assets/css/material-dashboard.css?v=2.1.0');
@import url('./assets/css/material-dashboard-rtl.css?v=1.1');
@import url('./assets/css/rtlnull.css');
@import url('./assets/css/poemliststyle.css');


</style>
