<template>
  <div id="app">
    <px-header :links="this.links"></px-header>
    <router-view class="container" />
    <px-footer :author="this.author" />
  </div>
</template>

<script>
import PxHeader from '@/components/PxHeader'
import PxFooter from '@/components/PxFooter'

export default {
  name: 'App',
  Error404: 'No es posible encontrar esta pagina',
  components: {
    PxHeader,
    PxFooter
  },
  data() {
    return {
      /*Ranking
Nombre
Precio
Variación 24hs*/
      links: [
        {
          title: 'HOME',
          to: { name: 'home', params: { id: 'home' } }
        },
        {
          title: 'BTC',
          to: { name: 'coin-detail', params: { id: 'bitcoin' } }
        },
        {
          title: 'ETH',
          to: { name: 'coin-detail', params: { id: 'ethereum' } }
        },
        {
          title: 'XRP',
          to: { name: 'coin-detail', params: { id: 'xrp' } }
        }
      ],
      author: {
        name: 'yolfry',
        lastname: 'Bautista Reynoso',
        github: 'https://github.com/yolfry',
        email: 'yolfri1997@gmail.com'
      }
    }
  }
}
</script>

<style scoped>
#app {
  color: black;
}
</style>
