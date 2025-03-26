<template>
  <SectionWrapper class="bg-white">
    <SectionContainer class="bg-white mb-12">
      <div class="w-full">
        <div class="container flex flex-col items-center">
          <Headline v-if="$slots.headline"><slot name="headline" mdc-unwrap="p" /></Headline>
          <h3 class="text-4xl font-semibold"><slot name="title" mdc-unwrap="p" /></h3>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer :width="containerWidth" class="bg-primary-50 gap-x-0">
      <slot name="content" mdc-unwrap="p" />
    </SectionContainer>
  </SectionWrapper>
</template>

<script setup lang="ts">
defineProps({
  containerWidth: {
    type: String,
    default: 'full'
  },
})
</script>