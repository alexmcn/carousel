import { shallowMount } from '@vue/test-utils';
import getSlidePosition from './getSlidePosition';

describe('getSlidePosition() multiplies 1/2 x number of slides in parent (rounded down) by the slide width so', () => {
  it('can position a slide at position x on a small screen', () => {
    const newPosition = getSlidePosition(220, 220, 3);
    expect(newPosition).toBe(-660);
  });

  it('can position a slide at position x on a medium screen', () => {
    const newPosition = getSlidePosition(660, 220, 10);
    expect(newPosition).toBe(-1980);
  });

  it('can position a slide at position x on a large screen', () => {
    const newPosition = getSlidePosition(1090, 220, 6);
    expect(newPosition).toBe(-880);
  });
});
