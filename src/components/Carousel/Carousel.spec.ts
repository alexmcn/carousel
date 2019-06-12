import { shallowMount } from '@vue/test-utils';
import Carousel from './index.vue';

describe('carousel', () => {
  it('renders a list of images', async () => {
    const instance = shallowMount(Carousel, { propsData: {images: [
      {id: 1, url: 'url of wessex', user: 'Eddie', likes: 1000 },
      {id: 2, url: 'url be back', user: 'Arnie', likes: 0 },
      {id: 3, url: 'url be sorry', user: 'James', likes: 7 },
    ]}});

    expect(instance.findAll('li').length).toBe(3);
  });
});
