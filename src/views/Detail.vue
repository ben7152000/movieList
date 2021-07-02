<template>
  <div class="container py-5">
    <div class="text-center">
      <h1 class="mb-4">{{ movie.title }}</h1>
      <img
        class="rounded mb-4"
        :src="`https://movie-list.alphacamp.io/posters/${movie.image}`"
        :alt="movie.title"
        style="max-height: 300px;"
      >
    </div>
    <div class="row">
      <div class="col col-md-10 col-lg-8 mx-auto">
        <p class="text-secondary mb-1">
          <strong>release date:</strong>
          {{ movie.release_date }}
        </p>
        <p>{{ movie.description  }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      movie: {}
    }
  },
  mounted () {
    this.movie = this.$route.query
  }
}
</script>
