<template>
  <SectionWrapper class="bg-white">
    <SectionContainer class="bg-white mb-24">
      <div class="w-full">
        <div class="container flex flex-col items-center">
          <UiHeadline><ContentSlot name="headline" unwrap="p"/></UiHeadline>
          <h3 class="text-4xl font-semibold"><ContentSlot name="title" unwrap="p"/></h3>
        </div>
      </div>
    </SectionContainer>
    <div :class="`bg-white flex flex-nowrap w-full gap-x-4 px-4 mb-24`">
      <Reviews/>
      <Reviews/>
      <Reviews/>
      <Reviews/>
    </div>
    <SectionContainer class="bg-white">
      <div class="w-full">
        <div class="container flex flex-col items-center">
          <UiButton href="#" type="secondary">Lees alle reviews</UiButton>
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