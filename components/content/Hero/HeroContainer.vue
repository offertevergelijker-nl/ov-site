<template>
  <div :class="`container mx-auto bg-blue-300 text-center text-white ${getWidth(width)}`" >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: 'full'
  },
});
</script>