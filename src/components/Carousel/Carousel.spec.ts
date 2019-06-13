import { shallowMount } from '@vue/test-utils';
import Carousel from './index.vue';

const testData = {
  propsData: {
    images: [
      { id: 1, url: 'url of wessex', user: 'Eddie', likes: 1000 },
      { id: 2, url: 'url be back', user: 'Arnie', likes: 0 },
      { id: 3, url: 'url be sorry', user: 'James', likes: 7 },
    ],
  },
};

describe('carousel', () => {
  it('renders a list of images', async () => {
    const instance = shallowMount(Carousel, testData);

    expect(instance.findAll('li').length).toBe(3);
  });

  it('sets the first slide to be active', () => {
    const instance = shallowMount(Carousel, testData);
    const listItems = instance.findAll('li');
    expect(listItems.at(0).classes()).toContain('active');
  });

  it('goes to the next slide when next slide button is clicked', () => {
    const instance = shallowMount(Carousel, testData);
    const listItems = instance.findAll('li');

    instance.find('[data-test="mini-next-button"]').trigger('click');

    instance.vm.$nextTick(() => {
      expect(listItems.at(0).classes()).not.toContain('active');
      expect(listItems.at(1).classes()).toContain('active');
    });
  });

  it('goes to the previous slide when previous button is clicked', () => {
    const instance = shallowMount(Carousel, testData);
    const listItems = instance.findAll('li');

    instance.find('[data-test="mini-next-button"]').trigger('click');
    instance.find('[data-test="mini-next-button"]').trigger('click');

    instance.vm.$nextTick(() => {
      expect(listItems.at(2).classes()).toContain('active');
    });

    instance.find('[data-test="mini-prev-button"]').trigger('click');

    instance.vm.$nextTick(() => {
      expect(listItems.at(1).classes()).toContain('active');
    });
  });
});
