<template>
  <div :class="classes.section">
    <div :class="[classes.container, getWidth(props.containerWidth)]">
      <p :class="[classes.value.base, classes.value.before]">
        <Icon name="material-symbols:check-circle-rounded" size="1.25rem" :class="classes.value.icon"/>
        <span :class="classes.value.label">{{ props.valueOne }}</span>
      </p>
      <p :class="[classes.value.base, classes.value.before]">
        <Icon name="material-symbols:check-circle-rounded" size="1.25rem" :class="classes.value.icon"/>
        <span :class="classes.value.label">{{ props.valueTwo }}</span>
      </p>
      <p :class="[classes.value.base, classes.value.before]">
        <Icon name="material-symbols:check-circle-rounded" size="1.25rem" :class="classes.value.icon"/>
        <span :class="classes.value.label">{{ props.valueThree }}</span>
      </p>
      <p :class="[classes.value.base, classes.value.before]">
        <Icon name="material-symbols:check-circle-rounded" size="1.25rem" :class="classes.value.icon"/>
        <span :class="classes.value.label">{{ props.valueFour }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  containerWidth: {
    type: String,
    default: 'two-thirds'
  },
  valueOne: {
    type: String,
    default: ''
  },
  valueTwo: {
    type: String,
    default: ''
  },
  valueThree: {
    type: String,
    default: ''
  },
  valueFour: {
    type: String,
    default: ''
  },
});

const classes = {
  section: 'relative bg-secondary-900 py-2',
  container: 'relative container flex justify-between mx-auto',
  value: {
    base: 'flex items-center',
    before: 'before:absolute before:bg-gray-50 before:aspect-square before:w-4 before:rounded-full before:ml-0.5',
    icon: 'flex-shrink-1 text-green-500 mr-1',
    label: 'text-white'
  }
}
</script>