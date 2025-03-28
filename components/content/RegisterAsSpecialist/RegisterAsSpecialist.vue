<template>
  <div :class="classes.section">
    <NuxtImg :src="props.image" :class="classes.image"/>
    <div :class="[classes.container, getWidth(props.containerWidth)]">
      <h3 :class="classes.title">{{ props.title }}</h3>
      <p :class="classes.text"><slot mdc-unwrap="p"/></p>
      <Button label="Inschrijven als vakspecialist" type="quaternary"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  containerWidth: {
    type: String,
    default: 'full'
  },
  image: {
    type: String,
    default: '/'
  },
  title: {
    type: String,
    default: ''
  }
});

const classes = {
  section: 'relative py-36',
  image: 'absolute inset-0 object-cover h-full w-full z-0',
  container: 'relative container mx-auto text-center text-white z-10',
  title: 'text-4xl font-semibold mb-6',
  text: 'text-lg mb-8'
}
</script>