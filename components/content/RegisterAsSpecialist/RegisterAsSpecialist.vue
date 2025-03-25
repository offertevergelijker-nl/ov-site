<template>
  <SectionWrapper class="relative">
    <NuxtImg :src="imgUrl" class="absolute top-0 h-full w-full object-cover z-0"/>
    <SectionContainer :width="containerWidth" class="bg-transparent relative w-[45%] z-10">
      <div class="w-full">
        <div class="container flex flex-col items-center text-white text-center">
          <h3 class="text-4xl font-semibold mb-4"><ContentSlot name="title" unwrap="p"/></h3>
          <p class="mb-6 text-lg"><ContentSlot name="content" unwrap="p"/></p>
          <UiButton href="#">Aanmelden als vakspecialist</UiButton>
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
  imgUrl: {
    type: String,
    default: '/'
  },
});
</script>