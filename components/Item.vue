<template lang="html">
<div  class="v-autocomplete-list-item col-md-12 py-2" @click="onClickItem(item)">
  <div>{{item.artist.name}} - {{item.title}}</div>
</div>
</template>

<script>

export default {
  name: 'item',
  props: {
    item: { required: true }
  },
  methods: {
    onClickItem (item) {
         this.$emit('clicked', item)
    }
  },


}
</script>
