<template>
  <div>
    <div class="columns is-centered">
      <div class="column is-3">
        <bounce-loader
          :loading="!this.id"
          :color="'blue'"
          :size="100"
          class="is-half"
        ></bounce-loader>
      </div>
    </div>

    <template v-if="this.id">
      <div class="columns">
        <div class="column is-2">
          <figure class="image is-64x64">
            <img
              class="is-rounded"
              :src="
                `https://static.coincap.io/assets/icons/${this.asset.data.symbol.toLowerCase()}@2x.png`
              "
              alt=""
            />
          </figure>

          <div class="title is-4">
            {{ this.asset.data.name }}
            <span class="color-grey">{{ this.asset.data.symbol }}</span>
          </div>
        </div>
        <div class="column is-8">
          <div class="card">
            <div class="card-content">
              <nav class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Ranking</p>
                    <p class="title"># {{ this.asset.data.rank }}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Precios Actual</p>
                    <p class="title">{{ this.asset.data.priceUsd | dollar }}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Precio más bajo</p>
                    <p class="title">{{ this.min | dollar }}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Precio más alto</p>
                    <p class="title">{{ this.max | dollar }}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Precio Promedio</p>
                    <p class="title">{{ this.avg | dollar }}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Variación 24HS</p>
                    <p class="title">
                      {{ this.asset.data.changePercent24Hr | percent }}
                    </p>
                  </div>
                </div>
              </nav>
            </div>
            <footer class="card-footer"></footer>
          </div>
        </div>
        <div class="column is-2">
          <!--Cambiar-->

          <div class="my-10 sm:mt-0 flex flex-col justify-center text-center">
            <button
              @click="toggleConverter"
              class="button is-primary is-rounded"
            >
              {{
                fromUsd
                  ? `USD a ${asset.data.symbol}`
                  : `${asset.data.symbol} a USD`
              }}
            </button>

            <div class="flex flex-row my-5">
              <label class="w-full" for="convertValue">
                <input
                  v-model="convertValue"
                  id="convertValue"
                  type="number"
                  class="input is-info"
                  :placeholder="
                    `Valor en ${fromUsd ? 'USD' : asset.data.symbol}`
                  "
                />
              </label>
            </div>

            <span class="text-xl"
              >{{ convertResult }}
              {{ fromUsd ? asset.data.symbol : 'USD' }}</span
            >
          </div>

          <!--Cambiar-->
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <line-chart
            :min="this.min"
            :max="this.max"
            :data="
              this.history.data.map(h => [
                h.date,
                parseFloat(h.priceUsd).toFixed(2)
              ])
            "
          ></line-chart>
        </div>
      </div>

      <div class="columns">
        <div class="column is-12">
          <table class="table">
            <tbody>
              <tr
                v-for="m in this.markets.data"
                v-bind:key="`${m.exchangeId}-${m.priceUsd}`"
              >
                <td>
                  {{ m.exchangeId }}
                </td>
                <td>
                  {{ m.priceUsd | dollar }}
                </td>
                <td>{{ m.baseSymbol }} / {{ m.quoteSymbol }}</td>
                <td>
                  <px-button
                    :IsLoading="m.IsLoading || false"
                    v-on:PxClick="getWebSite(m)"
                    >Obtener Link</px-button
                  >
                </td>
                <td>
                  <div v-if="m.url" class="field has-addons">
                    <p class="control">
                      <input class="input" type="text" :value="m.url" />
                    </p>
                    <p class="control">
                      <a
                        class="button is-info"
                        :href="m.url"
                        target="_ViewPage"
                      >
                        Ir</a
                      >
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
/*Importar API*/

import api from '@/api'
import PxButton from '@/components/PxButton'

export default {
  name: 'CoinDetail',
  components: { PxButton },
  created() {
    this.getCoin()
  },
  data() {
    return {
      asset: [],
      history: [],
      id: false,
      markets: [],
      fromUsd: true,
      convertValue: null
    }
  },
  computed: {
    convertResult() {
      if (!this.convertValue) {
        return 0
      }

      const result = this.fromUsd
        ? this.convertValue / this.asset.data.priceUsd
        : this.convertValue * this.asset.data.priceUsd

      return result.toFixed(4)
    },
    fixedHistory() {
      return this.history.data.map(h => parseFloat(h.priceUsd).toFixed(2))
    },

    sum() {
      return this.fixedHistory.reduce(
        (a, b) => parseFloat(a) + parseFloat(b),
        0.0
      )
    },

    min() {
      return Math.min(...this.fixedHistory)
    },

    max() {
      return Math.max(...this.fixedHistory)
    },

    avg() {
      return this.sum / this.fixedHistory.length || 0
    }
  },
  methods: {
    toggleConverter() {
      this.fromUsd = !this.fromUsd
    },
    getCoin() {
      const id = this.$route.params.id
      Promise.all([
        api.getAsset(id),
        api.getAssetHistory(id),
        api.getMarkets(id)
      ]).then(([asset, history, markets]) => {
        ;(this.asset = asset),
          (this.history = history),
          (this.markets = markets)
      })
    },
    getWebSite(exchabge) {
      this.$set(exchabge, 'IsLoading', true)
      api
        .getExchange(exchabge.exchangeId)
        .then(res => {
          //exchabge.url = res.data.exchangeUrl
          this.$set(exchabge, 'url', res.data.exchangeUrl)
        })
        .finally(() => {
          this.$set(exchabge, 'IsLoading', false)
        })
    }
  },
  watch: {
    asset() {
      this.id = this.asset.data.id
    },
    $route() {
      this.id = false
      this.getCoin()
    }
  }
}
</script>

<style scope>
.color-grey {
  color: rgb(62, 82, 126);
}
</style>
