<template>
  <div
    class="w-30 h-30 p-3 flex justify-center items-center border rounded-md shadow-md hover:shadow-gray-300 hover:shadow-lg hover:cursor-pointer m-3"
  >
    <img class="object-contain" :src="src" :alt="alt" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  src: string;
  alt: string;
}

defineProps<Props>();
</script>
