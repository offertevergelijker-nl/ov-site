<template>
  <div :class="classes.section">
    <div :class="[classes.container, getWidth(props.containerWidth), 'text-center mb-12']">
      <Headline :label="props.headline"/>
      <h3 :class="classes.title">{{ props.title }}</h3>
    </div>
    <div :class="[classes.container, getWidth(props.containerWidth), 'flex gap-x-4 mb-12']">
      <Reviews/>
      <Reviews/>
      <Reviews/>
      <Reviews/>
    </div>
    <div :class="[classes.container, getWidth(props.containerWidth), 'text-center']">
      <Button type="quaternary" label="Lees alle reviews"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  containerWidth: {
    type: String,
    default: 'full'
  },
  headline: {
    type: String,
    default: ''
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