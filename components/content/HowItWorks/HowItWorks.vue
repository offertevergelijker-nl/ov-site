<template>
  <SectionWrapper class="bg-white pb-36">
    <SectionContainer :width="containerWidth" class="bg-white">
      <div class="bg-white w-full">
        <div class="bg-white container flex flex-col items-center">
          <UiHeadline><slot name="headline" mdc-unwrap="p"/></UiHeadline>
          <h3 class="text-4xl font-semibold"><slot name="title" mdc-unwrap="p"/></h3>
        </div>
      </div>
    </SectionContainer>
  </SectionWrapper>
  <SectionWrapper class="bg-primary-50 pt-0">
    <SectionContainer :width="containerWidth" class="bg-primary-50">
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
});
</script>