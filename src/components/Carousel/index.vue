<template>
  <div class="carousel">
    <ul v-if="images && images.length">
      <li :key="image.id" v-for="image of images">
        <figure>
          <span>
            <img
              :src="image.webformatURL"
              :alt="image.tags"
            />
          </span>
          <figcaption>{{image.tags}}</figcaption>
        </figure>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Image {
  id: string;
  webformatURL: string;
  tags: string;
}

@Component
export default class Carousel extends Vue {
  @Prop() private images!: Image[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .carousel {
    overflow: hidden;
    width: 1130px;
    padding: 30px 20px;
    margin: 0 auto;
    background-color: white;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    white-space: nowrap;
  }

  li {
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    width: 200px;
    padding: 0;
    margin: 0 10px;

    span {
      display: block;
      width: 100%;
      height: 150px;
      background-color: darkturquoise;
      overflow: hidden;
    }
  }

  figure {
    margin: 0;
    padding: 0;
  }

  figcaption {
    margin-top: .5em;
    white-space: normal;
    font-size: 1.2em;
    text-transform: capitalize;
    color: hsl(200, 80%, 40%)
  }
  img {
    position: relative;
    height: 100%;
    transform: translateX(-50%);
    left: 50%;
  }
</style>
