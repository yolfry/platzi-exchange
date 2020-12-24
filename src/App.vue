<template>
  <div id="app">
    <px-header></px-header>
    <px-assets-table
      v-if="this.pxtableactive == true"
      v-bind:data="this.data"
      v-bind:columns="this.columns"
    ></px-assets-table>
  </div>
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "App",
  components: {
    PxHeader,
    PxAssetsTable
  },
  data() {
    return {
      pxtableactive: false,
      /*Ranking
Nombre
Precio
Variación 24hs*/
      data: [
        {
          id: 1,
          aanking: "Jesse",
          nombre: "Simmons",
          precio: "2016-10-15 13:43:27",
          variacion_24hs: "Male"
        }
      ],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "100",
          numeric: true,
          searchable: true
        },
        {
          field: "aanking",
          label: "Ranking",
          searchable: true
        },
        {
          field: "nombre",
          label: "Nombre",
          searchable: true
        },
        {
          field: "precio",
          label: "Precio",
          centered: true
        },
        {
          field: "variacion_24hs",
          label: "Variación 24hs"
        }
      ]
    };
  }
};
</script>

<style>
#app {
}
</style>
