<template>
  <div :class="`bg-white border border-solid border-gray-200 rounded-xl shadow-xl ${getWidth(columnWidth)} ${padding}`">
    <ColumnContainer class="bg-white">
      <div class="flex flex-row justify-between">
        <div>
          <Icon name="mdi:star" class="bg-yellow-500" size="18" />
          <Icon name="mdi:star" class="bg-yellow-500" size="18" />
          <Icon name="mdi:star" class="bg-yellow-500" size="18" />
          <Icon name="mdi:star" class="bg-yellow-500" size="18" />
          <Icon name="mdi:star" class="bg-yellow-500" size="18" />
        </div>
        <p class="bg-gray-100 flex flex-col justify-center items-center font-semibold rounded w-8 h-8 mb-4">10</p>
      </div>
      <h5 class="mb-2 font-semibold text-lg">Lorem ipsum</h5>
      <p class="mb-6 text-lg">Dolore esse velit in veniam reprehenderit dolor exercitation cupidatat consectetur ut et aute ad eiusmod ipsum.</p>
      <div class="flex flex-row justify-between items-end">
        <p class="text-gray-300">Offertvergelijker</p>
        <NuxtImg src="/offertevergelijker_logo.png" width="128" height="31" fit="contain"/>
      </div>
    </ColumnContainer>
  </div>
</template>

<script setup lang="ts">
defineProps({
  columnWidth: {
    type: String,
    default: 'third',
  },
  padding: {
    type: String,
    default: 'py-4'
  },
});
</script>