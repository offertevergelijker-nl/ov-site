<template>
  <div :class="classes.section">
    <div :class="[classes.container, getWidth(props.containerWidth), 'mb-12']">
      <h3 :class="classes.title">{{ props.title }}</h3>
    </div>
    <div :class="[classes.container, getWidth(props.containerWidth), 'flex gap-x-8 mb-12']">
      <slot />
    </div>
    <div :class="[classes.container, getWidth(props.containerWidth), 'text-center']">
      <Button type="quaternary" label="Bekijk alle producten"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  containerWidth: {
    type: String,
    default: 'full'
  },
  title: {
    type: String,
    default: ''
  }
});

const classes = {
  section: 'relative',
  container: 'relative container mx-auto',
  title: 'text-4xl font-semibold',
}
</script>