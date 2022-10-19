<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div>
      <img :src="imgUrl" alt="img of cat or dog" />
    </div>

    <div class="flex flex-col justify-center items-center">
      <div class="flex-grow flex flex-col justify-center items-center">
        Breed: {{ breed }}
      </div>

      <NuxtLink to="/" class="self-end justify-self-end">
        <button
          class="border border-blue-700 rounded-md px-3 py-1 bg-lue-500 text-gray-700"
          type="button"
        >
          Zurück
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCatsStore } from '@/features/Cats/useCatsStore';
import { useDogsStore } from '@/features/Dogs/useDogsStore';
import { getBreedFromUrl } from '@/features/Dogs/utils';

const router = useRouter();
const route = useRoute();

const { kind } = route.params;

//  go back to main page if no dog or cat
if (kind !== 'cat' && kind !== 'dog') {
  router.replace('/');
}

let imgUrl = '';
let breed = 'Unknown';

if (kind === 'cat') {
  const store = useCatsStore();

  if (store.selected === null) {
    router.replace('/');
  }

  imgUrl = store.selected.url;

  if (store.selected.breeds.length > 0) {
    breed = store.selected.breeds.map(({ name }) => name).join(', ');
  }
}
if (kind === 'dog') {
  const store = useDogsStore();

  imgUrl = store.selected;
  breed = getBreedFromUrl(imgUrl);
}
</script>
