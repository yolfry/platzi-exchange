<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item>
        <px-icon />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import PxIcon from "@/components/PxIcon.vue";

export default {
  name: "PXHeader",
  components: { PxIcon },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.nav {
  background-color: red;
}
</style>
