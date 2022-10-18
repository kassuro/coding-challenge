import { defineStore } from 'pinia';

import { CatImage } from '@/features/Cats/types';
import { useCatApi } from '@/features/Cats/useCatApi';

interface CatStoreState {
  data: CatImage[];
}

export const useCatsStore = defineStore('CatStore', {
  state: (): CatStoreState => ({
    data: [],
  }),

  actions: {
    async loadImages() {
      const { loadImages } = useCatApi();

      const result = await loadImages();

      this.data = result.data.value;
    },
  },
});
