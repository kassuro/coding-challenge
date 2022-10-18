import { defineStore } from 'pinia';

import { RandomDogImages } from '@/features/Dogs/types';
import { useDogApi } from '@/features/Dogs/useDogApi';

interface DogStoreState {
  data: RandomDogImages['message'];
}

export const useDogsStore = defineStore('DogStore', {
  state: (): DogStoreState => ({
    data: [],
  }),

  actions: {
    async loadImages() {
      const { loadImages } = useDogApi();

      const result = await loadImages();

      this.data = result.data.value.message;
    },
  },
});
