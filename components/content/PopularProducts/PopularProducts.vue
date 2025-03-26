<template>
  <SectionWrapper class="bg-white">
    <SectionContainer class="bg-white mb-12">
      <div class="w-full">
        <div class="container">
          <h3 class="text-4xl font-semibold">
            <slot name="title" mdc-unwrap="p"/>
          </h3>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer :width="containerWidth" class="bg-white gap-x-4 mb-24">
      <div class="w-full">
        <div class="container flex flex-row gap-x-8">
          <slot name="content" mdc-unwrap="p"/>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer class="bg-white">
      <div class="w-full">
        <div class="container flex flex-col items-center">
          <Button href="#" type="link">Bekijk alle producten</Button>
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
})
</script>