<template>
    <div class="col-3">
      <router-link :to="{path: `/movie/${movieList.id}`, query: movieList}" class="text-secondary">
        <div class="card mb-2">
          <img class="card-img-top" :src="`https://movie-list.alphacamp.io/posters/${movieList.image}`" :alt="movieList.title">
          <div class="card-body movie-item-body">
            <h6 class="card-title">{{ movieList.title }}</h6>
          </div>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movieList: {
      type: Object,
      required: true
    }
  }
}
</script>
