<template>
  <HeroWrapper class="relative" :class="beforeClasses">
    <NuxtImg :src="imgUrl" class="absolute top-0 h-full w-full object-cover z-0" />
    <HeroContainer :width="containerWidth" class="bg-transparent relative z-20">
      <h2 class="text-6xl font-bold font-lato mb-4">
        <slot name="heroTitle" mdc-unwrap="p"/>
      </h2>
      <p class="text-2xl mb-8">Meer dan <span class="font-semibold"><slot name="heroCustomerCount" mdc-unwrap="p"/></span> mensen gingen je voor.</p>
      <div class="flex justify-center gap-x-2 bg-white rounded w-fit text-black mx-auto p-1 mb-4">
        <select class="px-2">
          <option>Kies je categorie</option>
        </select>
        <form class="flex">
          <input type="text" placeholder="Jouw postcode..." class="px-3">
          <Button type="primary">Vergelijk offertes</Button>
        </form>
      </div>
      <p>Wij scoren een <slot name="heroReviewScore" mdc-unwrap="p" /> uit ruim <slot name="heroReviewCount" mdc-unwrap="p" /> klantbeoordelingen!</p>
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