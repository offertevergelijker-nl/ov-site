<template>
  <HeroWrapper class="relative" :class="beforeClasses">
    <NuxtImg :src="imgUrl" class="absolute top-0 h-full w-full object-cover z-0" />
    <HeroContainer :width="containerWidth" class="bg-transparent relative z-20">
      <h2 class="text-6xl font-bold font-lato mb-4">
        <ContentSlot name="heroTitle" unwrap="p" />
      </h2>
      <div class="flex justify-center gap-x-2 text-black mb-4">
        <form class="bg-white">
          <input type="text" placeholder="Jouw postcode...">
          <button>Vergelijk offertes</button>
        </form>
      </div>
      <p class="text-lg mb-8">Meer dan <span class="font-semibold">89.000</span> mensen gingen je voor.</p>
    </HeroContainer>
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