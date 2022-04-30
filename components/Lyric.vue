<template lang="html">
<div class="lyrics">
  <h2>{{item.artist.name}} - {{item.title}}</h2>
  <div>{{lyric.lyrics}}</div>
</div>
</template>

<script>
export default {
  name: 'lyrics',
  props: {
    lyric: { required: true },
    item: { required: true },
  },

}
</script>
