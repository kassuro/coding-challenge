import { defineStore } from 'pinia';

import { CatImage } from '@/features/Cats/types';
import { useCatApi } from '@/features/Cats/useCatApi';

interface CatStoreState {
  data: CatImage[];
  filterValue: string;
  selected: CatImage | null;
}

export const useCatsStore = defineStore('CatStore', {
  state: (): CatStoreState => ({
    data: [],
    filterValue: '',
    selected: null,
  }),

  actions: {
    async loadImages() {
      const { loadImages } = useCatApi();

      const result = await loadImages();

      this.data = result.data.value;
    },
  },

  getters: {
    filteredImageLinks(state) {
      const search = state.filterValue.toLowerCase();

      if (search === '') {
        return state.data;
      }

      return state.data.filter((img) =>
        img.breeds.some((breed) => breed.name.toLowerCase().includes(search)),
      );
    },
  },
});
