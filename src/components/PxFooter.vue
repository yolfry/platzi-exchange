<template>
  <div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Vue</strong> by <a :href="author.github">{{ fullname }} </a>.
          El código fuente es con licencia
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. De
          LATAM con 💚 para el mundo, Platzi
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PxFooter',
  props: {
    author: {
      type: Object,
      default: null
    }
  },
  computed: {
    fullname() {
      return this.author.name + ' ' + this.author.lastname
    }
  }
}
</script>
