<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item>
        <router-link
          :to="{
            name: 'home'
          }"
          ><px-icon
        /></router-link>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item v-for="l in this.links" :key="l.title">
        <router-link :to="l.to">{{ l.title }}</router-link>
      </b-navbar-item>

      <!--<b-navbar-item href="#">
        Documentation
      </b-navbar-item>


      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>-->
    </template>

    <!--<template slot="end">
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
    </template>-->
  </b-navbar>
</template>

<script>
import PxIcon from '@/components/PxIcon.vue'

export default {
  name: 'PXHeader',
  components: { PxIcon },
  data() {
    return {}
  },
  methods: {},
  props: {
    links: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.nav {
  background-color: red;
}
</style>
