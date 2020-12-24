<template>
  <div>
    <b-table :data="data">
      <template v-for="column in columns">
        <b-table-column :key="column.id" v-bind="column">
          <template
            v-if="column.searchable && !column.numeric"
            slot="searchable"
            slot-scope="props"
          >
            <b-input
              v-model="props.filters[props.column.field]"
              placeholder="Search..."
              icon="magnify"
              size="is-small"
            />
          </template>
          <template v-slot="props"> {{ props.row[column.field] }} </template>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "PxAssetsTable",
  props: ["data", "columns"],
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>
