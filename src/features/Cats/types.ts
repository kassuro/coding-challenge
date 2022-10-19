export interface CatCategories {
  id: number;
  name: string;
}

export interface CatBreed {
  id: string;
  name: string;
  // omitted the rest as it wasn't necessary for the task.
}

export interface CatImage {
  id: string;
  url: string;
  breeds: CatBreed[];
  categories: CatCategories[];
}

export const isCatImage = (val: CatImage | unknown): val is CatImage =>
  Object.prototype.hasOwnProperty.call(val, 'id') &&
  Object.prototype.hasOwnProperty.call(val, 'url');
