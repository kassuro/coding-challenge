<template>
  <div
    v-if="error"
    class="flex-col border border-red-500 text-red-700 rounded px-5 py-3 my-3"
  >
    <h2 class="text-lg">Error!</h2>
    <p>No data could be found!</p>
  </div>

  <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <template v-for="(item, i) in data" :key="i">
      <slot :item="item" />
    </template>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  data: unknown[] | undefined | null;
}

const props = defineProps<Props>();

const error = ref(false);

if (props.data === undefined || props.data === null) {
  /**
   * nuxt seems to abstract the error handling for the request
   * so we just get no data and an error flag.
   * We abuse this a little for the sake of simplicity and say it's an error
   * if we get not data into the list component.
   */
  error.value = true;
}
</script>
