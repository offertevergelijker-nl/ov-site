<template>
  <div class="bg-green-500 py-24">
    <div class="container bg-green-300 flex w-3/4 gap-x-12 items-center">
      <ColumnWrapper width="half" padding="p-0">
        <div class="bg-red-300 container">
          <h3 class="text-3xl font-semibold mb-4">
            <ContentSlot name="ColumnTitle" unwrap="p"/>
          </h3>
          <p class="mb-6">
            <ContentSlot name="ColumnContent" unwrap="p"/>
          </p>
          <Button :href="href">
            <ContentSlot name="ColumnActions" unwrap="p"/>
          </Button>
        </div>
      </ColumnWrapper>
      <ColumnWrapper width="half" padding="p-0">
        <div class="bg-red-300 container">
          <ContentSlot :use="$slots.image" class="w-full" unwrap="p"/>
        </div>
      </ColumnWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import {getWidth} from "~/utils/sizeUtils";

defineProps({
  width: {
    type: String,
    default: 'full'
  },
  href: {
    type: String,
    default: '#'
  },
})
</script>