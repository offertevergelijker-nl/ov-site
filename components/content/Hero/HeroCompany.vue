<template>
  <HeroWrapper class="relative" :class="beforeClasses">
    <NuxtImg :src="imgUrl" class="absolute top-0 h-96 w-full object-cover z-0" />
  </HeroWrapper>
</template>

<script setup lang="ts">
defineProps({
  containerWidth: {
    type: String,
    default: 'full'
  },
  imgUrl: {
    type: String,
    default: '/'
  },
});

const beforeClasses = `
before:absolute before:top-0 before:bg-black before:opacity-25
before:h-full before:w-full before:z-10
`;
</script>