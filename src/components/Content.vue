<template>
  <div class="content">
   <ContainerFluid></ContainerFluid>
   <FooterApp></FooterApp>

  </div>
</template>

<script>
import ContainerFluid from './ContainerFluid.vue'
import FooterApp from './Footer.vue'

export default {
  components: {
      ContainerFluid,
      FooterApp
  }
};
</script>

<style>
</style>
