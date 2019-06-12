<template>
<div>
  <div class="carousel">
    <div class="outer" ref="outer">
      <ul v-if="images && images.length" ref="inner">
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
      <div class="miniControls">
        <button class="prev"><Arrow /></button>
        <button class="next"><Arrow /></button>
      </div>
    </div>

  </div>
  <div class="controls">
    <button class="prev">Prev</button>
    <button class="next">Next</button>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Arrow from './arrow.svg';

interface Image {
  id: string;
  webformatURL: string;
  tags: string;
}

@Component({
  components: {
    Arrow,
  },
})
export default class Carousel extends Vue {
  @Prop() private images!: Image[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $mobile-button-size: 45px;
  .carousel {
    width: 260px;
    padding: 30px;
    margin: 0 auto;
    background-color: white;

    @media only screen and (min-width : 710px) {
      width: 700px;
    }

    @media only screen and (min-width : 1140px) {
      width: 1130px;
    }

    > div {
      overflow: hidden;
    }
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
    margin-right: 20px;

    &:last-item {
      margin-right: 0;
    } 

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
    color: hsl(200, 80%, 30%)
  }
  img {
    position: relative;
    height: 100%;
    transform: translateX(-50%);
    left: 50%;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  .outer {
    position: relative;
  }

  .miniControls {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    button {
      position: absolute;
      top: 30px;
      width: $mobile-button-size;
      height: $mobile-button-size * 2;
      padding: 0;
      background-color: hsla(200, 80%, 70%, 0.5);

      svg {
        fill: hsl(200, 80%, 30%);
        transform: scale(0.75);
      }
    }

    .prev {
      left: 0px;
      border-bottom-right-radius: $mobile-button-size * 2;
      border-top-right-radius: $mobile-button-size * 2;

      svg {
        position: relative;
        right: 10px;
        transform: scale(0.75) rotate(180deg);
      }
    }

    .next {
      right: 0px;
      border-bottom-left-radius: $mobile-button-size * 2;
      border-top-left-radius: $mobile-button-size * 2;

      svg {
        position: relative;
        left: 10px;
      }
    }
  }

  .controls {
    margin: 20px;
    text-align: center;

    button {
      background-color: hsl(200, 80%, 30%);
      padding: 5px 20px;
      margin: 3px;
      color: white;
      font-weight: bold;
      font-size: 1.5em;

    }
    .prev {
      border-radius: 10px 0 0 10px;
    }

    .next {
      border-radius: 0 10px 10px 0;
    }
  }
</style>
