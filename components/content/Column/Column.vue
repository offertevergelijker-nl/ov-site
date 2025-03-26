<template>
  <div :class="`bg-red-500 ${getWidth(width)} ${padding}`">
    <ColumnContainer>
      <div v-if="$slots.icon"><slot name="icon" mdc-unwrap="p"/></div>
      <p v-if="$slots.content"><slot name="content" mdc-unwrap="p"/></p>
      <button v-if="$slots.button"><slot name="button" mdc-unwrap="p"/></button>
    </ColumnContainer>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: 'third',
  },
  padding: {
    type: String,
    default: 'p-8'
  }
});
</script>