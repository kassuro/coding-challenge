<template>
  <input
    v-model="proxy"
    class="bg-white focus:border-blue-500 focus:shadow-outline-blue border-gray-300 py-1 px-3 h-8 shadow-sm block border rounded focus:outline-none"
    :placeholder="placeholder"
  />
</template>

<script lang="ts" setup>
interface Props {
  modelValue: string;
  placeholder: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

const proxy = computed({
  get() {
    return props.modelValue;
  },
  set(val: string) {
    emit('update:modelValue', val);
  },
});
</script>
