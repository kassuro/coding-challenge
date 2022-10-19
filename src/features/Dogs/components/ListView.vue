<template>
  <div class="p-3">
    <div class="ml-3">
      <label
        class="mb-1 block text-gray-500 hover:cursor-pointer"
        for="breed-filter"
        >Filter images by dog breed:
      </label>
      <TextInput
        placeholder="Please enter a dog breed"
        v-model="dogStore.filterValue"
        id="breed-filter"
      />
    </div>

    <ImageList :data="dogStore.filteredImageLinks">
      <template v-slot="{ item }">
        <ImageListItem
          :src="(item as string) "
          alt="A picture of a dog"
          @click="selectDog(item as string)"
        />
      </template>
    </ImageList>
  </div>
</template>

<script lang="ts" setup>
import { useDogsStore } from '@/features/Dogs/useDogsStore';

const router = useRouter();
const dogStore = useDogsStore();

const selectDog = (item: string) => {
  dogStore.selected = item;

  router.push('details/dog');
};
</script>
