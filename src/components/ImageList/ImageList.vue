<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <template v-for="(item, i) in data" :key="i">
      <slot :item="item" />
    </template>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  data: unknown[];
}

defineProps<Props>();
</script>
