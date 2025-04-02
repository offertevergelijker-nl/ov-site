<template>
  <div :class="classes.container">
    <div :class="classes.content">
      <Icon :name="props.icon" type="quaternary" size="4rem" class="mb-4"/>
      <p :class="classes.text">
        <slot mdc-unwrap="p"/>
      </p>
      <Button
          v-if="props.button"
          :label="props.button"
          iconRight="material-symbols:chevron-right-rounded"
          type="secondary"
          size="lg"
          isLink
      />
    </div>
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
  container: 'group relative bg-white rounded-lg p-8 border border-l border-gray-200',
  content: 'relative text-left',
  text: 'text-lg mb-6',
}
</script>