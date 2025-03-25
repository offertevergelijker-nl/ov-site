<template>
  <SectionWrapper class="bg-primary-50">
    <SectionContainer class="bg-primary-50 mb-12">
      <div class="w-full">
        <div class="container">
          <h3 class="text-4xl font-semibold">
            <ContentSlot name="title" />
          </h3>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer :width="containerWidth" class="bg-primary-50 gap-x-4 mb-24">
      <div class="w-full">
        <div class="container flex flex-row gap-x-8">
          <ContentSlot name="content"/>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer class="bg-primary-50">
      <div class="w-full">
        <div class="container flex flex-col items-center">
          <UiButton href="#" type="link">Bekijk alle producten</UiButton>
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