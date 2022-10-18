import { defineStore } from 'pinia';

import { RandomDogImages } from '@/features/Dogs/types';
import { useDogApi } from '@/features/Dogs/useDogApi';

interface DogStoreState {
  data: RandomDogImages['message'];
  filterValue: string;
}

export const useDogsStore = defineStore('DogStore', {
  state: (): DogStoreState => ({
    data: [],
    filterValue: '',
  }),

  actions: {
    async loadImages() {
      const { loadImages } = useDogApi();

      const result = await loadImages();

      this.data = result.data.value.message;
    },
  },

  getters: {
    filteredImageLinks(state) {
      return state.data.filter((imgUrl) => {
        const breed = imgUrl.split('breeds/')[1].split('/')[0].toLowerCase();

        return breed.includes(state.filterValue.toLowerCase());
      });
    },
  },
});
