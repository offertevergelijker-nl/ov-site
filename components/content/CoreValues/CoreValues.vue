<template>
    <SectionWrapper class="!py-2 bg-primary-900">
      <SectionContainer :width="containerWidth" class="bg-primary-900">
        <div class="w-full">
          <div class="container flex flex-row justify-between text-center text-white">
            <p v-if="$slots.valueOne" class="flex flex-row gap-x-1 items-center before:bg-gray-50 before:absolute before:aspect-square before:w-4 before:ml-0.5 before:rounded-full">
              <Icon name="mdi:checkbox-marked-circle" size="20" class="text-green-500"/>
              <slot name="valueOne" mdc-unwrap="p"/>
            </p>
            <p v-if="$slots.valueTwo" class="flex flex-row gap-x-1 items-center motion-delay-100 before:bg-gray-50 before:absolute before:aspect-square before:w-4 before:ml-0.5 before:rounded-full">
              <Icon name="mdi:checkbox-marked-circle" size="20" class="text-green-500"/>
              <slot name="valueTwo" mdc-unwrap="p"/>
            </p>
            <p v-if="$slots.valueThree" class="flex flex-row gap-x-1 items-center motion-delay-200 before:bg-gray-50 before:absolute before:aspect-square before:w-4 before:ml-0.5 before:rounded-full">
              <Icon name="mdi:checkbox-marked-circle" size="20" class="text-green-500"/>
              <slot name="valueThree" mdc-unwrap="p"/>
            </p>
            <p v-if="$slots.valueFour" class="flex flex-row gap-x-1 items-center motion-delay-300 before:bg-gray-50 before:absolute before:aspect-square before:w-4 before:ml-0.5 before:rounded-full">
              <Icon name="mdi:checkbox-marked-circle" size="20" class="text-green-500"/>
              <slot name="valueFour" mdc-unwrap="p"/>
            </p>
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
});
</script>