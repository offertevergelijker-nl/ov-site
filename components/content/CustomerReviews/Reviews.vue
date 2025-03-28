<template>
  <Card>
    <div :class="classes.rating.base">
      <div :class="classes.rating.stars">
        <Icon name="mdi:star" class="text-yellow-500" size="1rem" />
        <Icon name="mdi:star" class="text-yellow-500" size="1rem" />
        <Icon name="mdi:star" class="text-yellow-500" size="1rem" />
        <Icon name="mdi:star" class="text-yellow-500" size="1rem" />
        <Icon name="mdi:star" class="text-yellow-500" size="1rem" />
      </div>
      <p :class="classes.rating.number">10</p>
    </div>
    <h5 :class="classes.title">Lorem ipsum</h5>
    <p :class="classes.text">Dolore esse velit in veniam
      reprehenderit dolor exercitation cupidatat consectetur
      ut et aute ad eiusmod ipsum.</p>
    <div :class="classes.company.base">
      <p :class="classes.company.name">Offertvergelijker</p>
      <NuxtImg src="/offertevergelijker_logo.png" width="128" height="31" fit="contain"/>
    </div>
  </Card>
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

const classes = {
  rating: {
    base: 'relative flex flex-row justify-between mb-4',
    stars: 'relative',
    number: 'relative flex justify-center items-center bg-gray-200 rounded-sm font-medium h-8 w-8',
  },
  title: 'text-lg font-semibold mb-2',
  text: 'text-lg mb-6',
  company: {
    base: 'relative flex flex-row justify-between items-end',
    name: 'text-gray-300',
    logo: ''
  }
}
</script>