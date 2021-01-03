<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>
            <span @click="this.changeSortOrde" :style="{ cursor: 'pointer' }">
              {{ this.sortOrder == 1 ? '☝' : '👇' }} Ranking</span
            >
          </th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cap. de Mercado</th>
          <th>Variación 24hs</th>
          <td></td>
          <td>
            <div class="field has-addons">
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Buscar"
                  v-model="filter"
                />
              </div>
              <div class="control">
                <a class="button is-info"> Buscar </a>
              </div>
            </div>
          </td>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th></th>
          <th>
            <span>Ranking</span>
          </th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cap. de Mercado</th>
          <th>Variación 24hs</th>
          <td></td>
          <td>
            <div class="field has-addons">
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Buscar"
                  v-model="filter"
                />
              </div>
              <div class="control">
                <a class="button is-info"> Buscar </a>
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="a in filteredAssets" v-bind:key="a.id">
          <th>
            <img
              v-bind:src="
                `https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`
              "
              class="icon"
              v-bind:alt="a.name"
            />
          </th>
          <td>
            {{ a.rank }}
          </td>
          <td>
            <router-link
              v-bind:to="{
                name: 'coin-detail',
                params: {
                  id: a.id,
                  data: a
                }
              }"
            >
              {{ a.name }}
            </router-link>
          </td>
          <td>{{ a.priceUsd | dollar }}</td>
          <td>{{ a.marketCapUsd | dollar }}</td>
          <td
            v-bind:class="
              a.changePercent24Hr.includes('-') ? 'is-danger' : 'is-success'
            "
          >
            {{ a.changePercent24Hr | percent }}
          </td>
          <td>
            <px-button v-on:PxClick="view_detail(a.id, a)"
              >Ver Detaller</px-button
            >
          </td>

          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PxButton from '@/components/PxButton'

export default {
  name: 'PxAssetsTable',
  props: ['assets'],
  data() {
    return {
      filter: '',
      sortOrder: 1
    }
  },
  computed: {
    filteredAssets() {
      const altOrder = this.sortOrder == 1 ? -1 : 1

      return this.assets
        .filter(
          a =>
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder
          }

          return altOrder
        })
    }
  },
  components: { PxButton },
  methods: {
    view_detail(id, data) {
      this.$router.push({
        name: 'coin-detail',
        params: {
          id: id,
          data: data
        }
      })
    },
    changeSortOrde() {
      this.sortOrder = this.sortOrder == 1 ? -1 : 1
    }
  }
}
</script>

<style scoped>
.icon {
  width: '64px';
}
</style>
