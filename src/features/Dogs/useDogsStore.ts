import { defineStore } from 'pinia';

import { RandomDogImages } from '@/features/Dogs/types';
import { useDogApi } from '@/features/Dogs/useDogApi';
import { getBreedFromUrl } from '@/features/Dogs/utils';

interface DogStoreState {
  data: RandomDogImages['message'];
  filterValue: string;
  selected: string | null;
}

export const useDogsStore = defineStore('DogStore', {
  state: (): DogStoreState => ({
    data: [],
    filterValue: '',
    selected: null,
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
        const breed = getBreedFromUrl(imgUrl);

        return breed.includes(state.filterValue.toLowerCase());
      });
    },
  },
});
