<template>
  <div :class="`container mx-auto bg-green-300 flex flex-nowrap ${getWidth(width)} gap-x-12`">
    <slot/>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: 'full'
  },
})
</script>