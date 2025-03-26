<template>
  <SectionWrapper class="bg-white">
    <SectionContainer :width="containerWidth" class="relative bg-white items-center py-8" :class="beforeClasses">
      <div class="bg-white flex items-center gap-x-12 rounded-2xl p-12 z-10">
        <div class="w-1/2 z-10">
          <div class="container">
            <h3 class="text-4xl font-semibold mb-4">
              <slot name="title" mdc-unwrap="p"/>
            </h3>
            <p class="mb-2 italic">
              <slot name="introduction" mdc-unwrap="p"/>
            </p>
            <p class="mb-8 text-lg">
              <slot name="content" mdc-unwrap="p"/>
            </p>
            <Button>Vergelijk offertes</Button>
          </div>
        </div>
        <div class="w-1/2 z-10">
          <div class="container">
            <img :src="imgSrc" :alt="imgAlt" class="aspect-square object-cover rounded-xl"/>
          </div>
        </div>
      </div>
    </SectionContainer>
  </SectionWrapper>
</template>

<script setup lang="ts">
defineProps({
  containerWidth: {
    type: String,
    default: 'full'
  },
  imgSrc: {
    type: String,
    default: '/'
  },
  imgAlt: {
    type: String,
    default: ''
  },
});

const beforeClasses = `
before:bg-[url('public/assets/pattern.jpeg')]
before:absolute before:w-full before:h-full before:-right-7.5
before:bg-cover before:rounded-3xl before:opacity-75 before:z-0`
</script>