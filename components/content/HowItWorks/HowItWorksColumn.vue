<template>
  <div :class="classes.container">
    <div :class="classes.content">
      <Badge :icon="props.icon" type="quaternary" size="lg" class="mb-4"/>
      <p :class="classes.text">
        <slot mdc-unwrap="p"/>
      </p>
      <Button
          v-if="props.button"
          :label="props.button"
          iconRight="material-symbols:chevron-right-rounded"
          type="secondary"
          isLink
      />
    </div>
    <div :class="[classes.line.base, classes.line.hover]"/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  button: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: ''
  },
});

const classes = {
  container: 'group relative bg-white shadow-xl hover:shadow-2xl rounded-xl p-8 overflow-hidden border-t border-l border-gray-100 transition-all duration-200',
  content: 'relative text-left z-10',
  text: 'text-lg mb-6',
  line: {
    base: 'absolute bottom-0 left-0 w-0 h-1 bg-secondary-500 opacity-30 transition-all duration-200',
    hover: 'group-hover:w-full group-hover:opacity-100',
  }
}
</script>