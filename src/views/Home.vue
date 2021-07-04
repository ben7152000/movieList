<template>
  <div class="container py-5">
    <Search :keyword.sync="keyword"/>
    <div class="row">
      <MovieCard v-for="(movieList,index) in searchData.length ? searchData : movieLists" :key="index" :movieList="movieList"/>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'
import Search from '@/components/Search'

import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Search,
    MovieCard
  },
  data () {
    return {
      movieLists: [],
      keyword: '',
      searchData: []
    }
  },
  mounted () {
    axios.get('http://localhost:8081/api/movie')
      .then(res => {
        this.movieLists = res.data.movieList.results
      })
      .catch(e => {
        console.log(e)
      })
  },
  watch: {
    keyword () {
      if (this.keyword) {
        this.searchData = this.movieLists.filter(value => {
          return value.title.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1
        })
      } else {
        this.searchData = []
      }
    }
  }
}
</script>
