<template>
  <div id="app">
    <Carousel :images="images" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import Carousel from '@/components/Carousel/index.vue';

@Component({
  components: {
    Carousel,
  },
})

export default class App extends Vue {
  public images: any[] = [];

  public async fetchData() {
    const response = await axios.request({
      method: 'get',
      url: 'https://pixabay.com/api',
      params: {
        key: '9656065-a4094594c34f9ac14c7fc4c39',
        q: 'beautiful+landscape',
        image_type: 'photo',
      },
    });
    this.images = response.data.hits;
  }

  public mounted() {
    this.fetchData();
  }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ropa+Sans&display=swap');
#app {
  font-family: 'Ropa Sans', sans-serif;
}
</style>
