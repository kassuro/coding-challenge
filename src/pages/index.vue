<template>
  <TabGroup>
    <TabList>
      <Tab as="template" v-slot="{ selected }">
        <button
          type="button"
          class="px-3 py-1 border-b text-gray-800 mr-1 focus-visible:outline-none"
          :class="{
            'border-blue-500': selected,
          }"
        >
          Cat images
        </button>
      </Tab>
      <Tab as="template" v-slot="{ selected }">
        <button
          type="button"
          class="px-3 py-1 border-b text-gray-800 mr-1 focus-visible:outline-none"
          :class="{
            'border-blue-500': selected,
          }"
        >
          Dog images
        </button>
      </Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <KeepAlive>
          <CatList />
        </KeepAlive>
      </TabPanel>

      <TabPanel>
        <KeepAlive>
          <DogList />
        </KeepAlive>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script lang="ts" setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { useDogsStore } from '@/features/Dogs/useDogsStore';
import { useCatsStore } from '@/features/Cats/useCatsStore';
import CatList from '@/features/Cats/components/ListView.vue';
import DogList from '@/features/Dogs/components/ListView.vue';

const catsStore = useCatsStore();
const dogStore = useDogsStore();

dogStore.loadImages();
catsStore.loadImages();
</script>
