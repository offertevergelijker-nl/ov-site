<template>
  <div :class="`relative bg-[url('public/assets/home/pexels-ensar-84745078-17785614.jpg')] bg-cover ${getWidth(columnWidth)} rounded-lg ${beforeClasses}`">
    <ColumnContainer class="bg-transparent flex flex-col items-center justify-center text-white h-96">
      <h4 v-if="$slots.product" class="text-xl font-semibold mb-4 z-10">Zonnepanelen</h4>
      <UiButton v-if="$slots.button" :href="link" type="link" class=" text-white z-10"><ContentSlot name="button" unwrap="p"/></UiButton>
    </ColumnContainer>
  </div>
</template>

<script setup lang="ts">
defineProps({
  columnWidth: {
    type: String,
    default: 'third',
  },
  link: {
    type: String,
    default: '#',
  }
});

const beforeClasses = `
before:bg-black before:absolute
before:w-full before:h-full
before:opacity-25 before:rounded-lg`
</script>