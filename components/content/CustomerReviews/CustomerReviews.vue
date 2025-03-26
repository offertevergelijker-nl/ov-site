<template>
  <SectionWrapper class="bg-white">
    <SectionContainer class="bg-white mb-24">
      <div class="w-full">
        <div class="container flex flex-col items-center">
          <Headline><slot name="headline" mdc-unwrap="p"/></Headline>
          <h3 class="text-4xl font-semibold"><slot name="title" mdc-unwrap="p"/></h3>
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
          <Button href="#" type="secondary">Lees alle reviews</Button>
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