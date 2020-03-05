<template>
  
    <div class="main-panel">
   
     <NavBar></NavBar>
      <Content></Content>
      
    </div>
 
</template>

<script>
import NavBar from  './components/NavBar.vue'
import Content from './components/Content.vue'
export default {
  components: {
    NavBar,
    Content
  }
};
</script>

<style>
</style>
