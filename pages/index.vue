<template>
<div id="app" class="container">
  <div class="vh-100">
    <h2 class="text-center mb-3">Search your lyric songs</h2>
    <Search/>
  </div>
</div>
</template>
<script>
import Search from "@/components/Search.vue"
export default {
  components: {
    Search
  },
  data() {
    return {
      articles: []
    }
  },
  mounted() {

console.log(process.env.VUE_APP_GENIUSKEY)
    console.log("Artikel: ", this.articles);
  },

}
</script>
<style>
</style>
