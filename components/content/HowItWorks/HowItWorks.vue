<template>
  <div :class="[classes.section, '']">
    <div :class="[classes.container, getWidth(props.containerWidth), 'text-center mb-12']">
      <Headline :label="props.headline" type="quaternary"/>
      <h3 :class="classes.title">{{ props.title }}</h3>
    </div>
  </div>
  <div :class="[classes.section, '!bg-secondary-100 pt-0']">
    <div :class="[classes.container, getWidth(props.containerWidth), 'flex']">
      <div :class="[classes.column.container, '-mt-24']">
        <div :class="[classes.column.content, 'flex flex-row gap-x-8']">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  containerWidth: {
    type: String,
    default: 'two-thirds'
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
  section: 'relative bg-white py-24',
  container: 'relative container mx-auto',
  column: {
    container: 'relative',
    content: ''
  },
  title: 'text-4xl font-semibold',
}
</script>