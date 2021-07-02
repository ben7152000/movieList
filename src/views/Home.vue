<template>
  <div class="container py-5">
    <div class="row">
      <div class="col">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Enter movie name to search..." v-model="keyword">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" @click="search">Search</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <MovieCard v-for="(movieList,index) in searchData.length ? searchData : movieLists" :key="index" :movieList="movieList"/>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
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
  methods: {
    search () {
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
