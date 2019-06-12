import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import App from './index.vue';

jest.mock('axios');

describe('App', () => {
  beforeEach(() => {
    (axios.request as any).mockResolvedValue({ data: { hits: [
      {id: 1, url: 'url of wessex', user: 'Eddie', likes: 1000 },
      {id: 2, url: 'url be back', user: 'Arnie', likes: 0 },
      {id: 3, url: 'url be sorry', user: 'James', likes: 7 },
    ] } });
  });

  afterEach(() => {
    (axios.request as any).mockRestore();
  });

  it('fetches images when mounted', async () => {
    const instance = shallowMount(App);
    expect(axios.request).toHaveBeenCalledTimes(1);
    await instance.vm.$nextTick();
    expect((instance.vm as any).images.length).toBe(3);
  });
});
