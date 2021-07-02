<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Movie List</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
}
</style>
