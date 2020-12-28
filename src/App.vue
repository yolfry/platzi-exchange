<template>
  <div id="app">
    <px-header></px-header>
    <router-view class="container"/>
  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader";

export default {
  name: "App",
  Error404: 'No es posible encontrar esta pagina',
  components: {
    PxHeader
  },
  data() {
    return {
      /*Ranking
Nombre
Precio
Variación 24hs*/
  
    };
  }
};
</script>

<style scoped>
#app {
  color: black;
}
</style>
