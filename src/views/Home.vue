<template>
  <div>
    <div class="columns is-centered">
      <div class="column is-3">
        <bounce-loader
          :loading="isLoading"
          :color="'blue'"
          :size="100"
          class="is-half"
        ></bounce-loader>
      </div>
    </div>

    <px-assets-table v-if="!isLoading" :assets="assets.data"></px-assets-table>
  </div>
</template>

<script>
import PxAssetsTable from '@/components/PxAssetsTable'
import api from '@/api'

//import api from '@/api'

export default {
  name: 'PxHome',
  components: { PxAssetsTable },
  data() {
    return {
      assets: [],
      isLoading: false
    }
  },
  created() {
    this.isLoading = true
    api
      .getAssets()
      .then(res => (this.assets = res))
      .finally(() => (this.isLoading = false))
  }
}
</script>
