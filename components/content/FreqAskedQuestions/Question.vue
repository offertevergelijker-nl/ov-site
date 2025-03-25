<template>
  <div class="text-lg border-b border-solid border-gray-300 py-4 first:pt-0 last:pb-0 last:border-b-0">
    <div @click="handleQuestion" class="flex w-full justify-between items-center font-medium cursor-pointer">
      <ContentSlot name="question" unwrap="p" />
      <Icon :name="isOpen ? 'ic:round-minus' : 'ic:round-add'" />
    </div>
    <p class="pt-4" v-if="isOpen">
      <ContentSlot name="answer" unwrap="p"/>
    </p>
  </div>
</template>

<script setup>
const isOpen = ref(false)

const handleQuestion = () => {
  isOpen.value = !isOpen.value
}
</script>