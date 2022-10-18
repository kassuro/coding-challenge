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
