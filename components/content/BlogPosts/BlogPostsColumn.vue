<template>
  <div :class="`bg-transparent ${getWidth(columnWidth)}`">
    <ColumnContainer class="bg-transparent">
      <NuxtImg :src="imgSrc" :alt="imgAlt" format="webp" quality="80" class="aspect-video object-cover rounded-xl mb-6"/>
      <h5 v-if="$slots.content" class="mb-2 font-semibold text-lg"><slot name="title" mdc-unwrap="p"/></h5>
      <p v-if="$slots.content" class="mb-6 text-lg"><slot name="content" mdc-unwrap="p"/></p>
      <Button href="#" type="link" icon>Lees verder</Button>
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