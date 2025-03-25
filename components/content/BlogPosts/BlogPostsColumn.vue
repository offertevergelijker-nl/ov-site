<template>
  <div :class="`bg-transparent ${getWidth(columnWidth)}`">
    <ColumnContainer class="bg-transparent">
      <NuxtImg :src="imgSrc" :alt="imgAlt" format="webp" quality="80" class="aspect-video object-cover rounded-xl mb-6"/>
      <h5 v-if="$slots.content" class="mb-2 font-semibold text-lg"><ContentSlot name="title" unwrap="p"/></h5>
      <p v-if="$slots.content" class="mb-6 text-lg"><ContentSlot name="content" unwrap="p"/></p>
      <UiButton href="#" type="link" icon>Lees verder</UiButton>
    </ColumnContainer>
  </div>
</template>

<script setup lang="ts">
defineProps({
  columnWidth: {
    type: String,
    default: 'third',
  },
  imgSrc: {
    type: String,
    default: '/'
  },
  imgAlt: {
    type: String,
    default: ''
  },
});
</script>