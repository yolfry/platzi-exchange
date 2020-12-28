<template>
  
     <div>
       <px-assets-table :data="this.data" :columns="this.columns"></px-assets-table>
     </div>

</template>

<script>

import PxAssetsTable from '@/components/PxAssetsTable'


export default {
  name: "PxHome",
  components:{PxAssetsTable},
  data (){
    return {
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
    }
  }
};
</script>
