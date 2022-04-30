<template lang="html">
  <div class="v-autocomplete row vh-100 d-flex justify-content-center">
    <div class="col-md-12 v-autocomplete-input-group v-autocomplete-selected">
      <input class="form-control" type="search" v-model="searchText"
            placeholder="Search lyric songs">
        <div class="container row px-4 v-autocomplete-list mt-1 scroll" v-if="show">
          <Item v-for="item, i in internalItems"
              :key="i" :item="item" @clicked="lyricMethod"/>
        </div>
    </div>
    <div>
        <Lyric :lyric="lyrics" :item="item" v-if="lyrics"/>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
import Lyric from './Lyric.vue'
export default {
  name: 'search',
  components: {
    Item,
    Lyric
  },
  data () {
    return {
      searchText: '',
      showList: false,
      timeouts: null,
      internalItems: [],
      item: null,
      lyrics: null,
    }
  },
  computed: {
      show () {
      return this.internalItems.length !== 0
    }
  },
  methods: {
    async lyricMethod(item) {
       this.item = item
       const res = await this.$axios.get("v1/"+item.artist.name+'/'+item.title)
       this.lyrics = res.data
       this.searchText = ''

    },
  },
  watch: {
    searchText: async function(search){
      if(this.searchText !== ''){
        if(this.timeouts){
          await clearTimeout(this.timeouts)
        }
        this.timeouts = await setTimeout( async () => {
          const res = await this.$axios.get("suggest/"+search)
          this.internalItems = res.data.data
        }, 1000)
      } else {
        this.internalItems = []
      }

    }
  },
}
</script>

<style>
  .v-autocomplete {
    position: relative;
  }
  .v-autocomplete .v-autocomplete-list {
    position: absolute;
  }
  .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item {
    cursor: pointer;
  }
  .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item.v-autocomplete-item-active {
    background-color: #f3f6fa;
  }
  .v-autocomplete-list-item:hover{
    background-color: #dadada;
  }
  .scroll {
    overflow-y: scroll;
    height: 300px;
  }
</style>
