<template>
  <div>
    <button v-on:click="CustomClick()" class="button is-info is-outlined">
      <div v-show="!IsLoading">
        <slot></slot>
      </div>
      <beat-loader :loading="this.IsLoading"></beat-loader>
    </button>
  </div>
</template>

<script>
export default {
  name: 'PxButton',
  methods: {
    CustomClick() {
      this.$emit('PxClick')
    }
  },
  props: {
    IsLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
