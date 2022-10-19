<template>
  <div class="p-3">
    <div class="ml-3">
      <label
        class="mb-1 block text-gray-500 hover:cursor-pointer"
        for="breed-filter"
        >Filter images by cat breed:
      </label>
      <TextInput
        placeholder="Please enter a cat breed"
        v-model="catsStore.filterValue"
        id="breed-filter"
      />
    </div>

    <ImageList :data="catsStore.filteredImageLinks">
      <template v-slot="{ item }">
        <ImageListItem
          :src="isCatImage(item) ? item.url : ''"
          alt="A picture of a dog"
        />
      </template>
    </ImageList>
  </div>
</template>

<script lang="ts" setup>
import { useCatsStore } from '@/features/Cats/useCatsStore';
import { isCatImage } from '@/features/Cats/types';

const catsStore = useCatsStore();
</script>
