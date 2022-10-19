export const getBreedFromUrl = (url: string) =>
  url.split('breeds/')[1].split('/')[0].toLowerCase();
