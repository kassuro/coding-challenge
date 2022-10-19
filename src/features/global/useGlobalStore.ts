import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('GlobalStore', {
  state: () => ({
    activeTab: 0,
  }),
});
