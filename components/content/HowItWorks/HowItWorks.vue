<template>
  <div :class="classes.section">
    <div :class="[classes.container, getWidth(props.containerWidth), 'text-center mb-12']">
      <Headline :label="props.headline"/>
      <h3 :class="classes.title">{{ props.title }}</h3>
    </div>
    <div :class="[classes.container, getWidth(props.containerWidth), 'flex justify-center gap-x-10']">
      <div :class="[classes.column.container, 'w-1/3']">
        <div :class="[classes.column.content, 'flex flex-col gap-y-8']">
          <slot/>
        </div>
      </div>
      <div :class="[classes.column.container, 'w-1/3']">
        <div :class="[classes.column.content, 'flex flex-col gap-y-8']">
          <slot/>
        </div>
      </div>
      <div :class="[classes.column.container, 'w-1/3']">
        <div :class="[classes.column.content, 'flex flex-col gap-y-8']">
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
  section: 'relative py-24',
  container: 'relative container mx-auto',
  column: {
    container: 'relative',
    content: ''
  },
  title: 'text-4xl font-semibold',
}
</script>