<template>
  <div class="row">
    <div class="col">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Enter movie name to search..." v-model="word">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" @click="searchHandler(word)">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      word: ''
    }
  },
  props: {
    keyword: {
      type: String,
      required: true
    }
  },
  methods: {
    searchHandler (word) {
      this.$emit('update:keyword', word)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
