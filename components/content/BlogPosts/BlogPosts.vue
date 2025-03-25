<template>
  <SectionWrapper class="bg-primary-50">
    <SectionContainer class="bg-primary-50 mb-12">
      <div class="w-full">
        <div class="container flex flex-col items-center">
          <UiHeadline v-if="$slots.headline"><ContentSlot name="headline" /></UiHeadline>
          <h3 class="text-4xl font-semibold"><ContentSlot name="title" /></h3>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer :width="containerWidth" class="bg-primary-50 gap-x-0">
      <ContentSlot name="content" unwrap="p" />
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