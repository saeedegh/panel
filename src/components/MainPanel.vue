<template>
  
    <div class="main-panel">
   
     <NavBar></NavBar>
      <Content></Content>
      
    </div>
 
</template>

<script>
import NavBar from  './NavBar.vue'
import Content from './Content.vue'
export default {
  components: {
    NavBar,
    Content
  }
};
</script>

<style>
</style>
