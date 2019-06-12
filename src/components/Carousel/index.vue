<template>
  <div>
    <ul v-if="images && images.length">
      <li v-bind:key="image.id" v-for="image of images">
        {{image.id}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Image {
  id: string;
  url: string;
  user: string;
  likes: number;
}

@Component
export default class Carousel extends Vue {
  @Prop() private images!: Image[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
