<template>
  <div :class="`bg-red-500 ${getWidth(width)} ${padding}`">
    <ColumnContainer>
      <div v-if="$slots.icon"><ContentSlot name="icon" unwrap="p"/></div>
      <p v-if="$slots.content"><ContentSlot name="content" unwrap="p"/></p>
      <button v-if="$slots.button"><ContentSlot name="button" unwrap="p"/></button>
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