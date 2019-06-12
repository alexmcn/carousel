export default (parentWidth: number, slideWidth: number, positon: number) => (
  (Math.floor(Math.ceil(parentWidth / slideWidth) / 2) * slideWidth) - (slideWidth * positon)
);
