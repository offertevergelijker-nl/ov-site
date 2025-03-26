<template>
  <button @click.prevent="handleClick" :class="classes.container">
    <div :class="classes.content">
      <Icon :name="leftIcon" :class="classes.icon" v-if="leftIcon"/>
      <span :class="classes.label" v-if="$slots.default"><slot /></span>
      <Icon :name="rightIcon" :class="[classes.icon, 'ml-auto']" v-if="rightIcon"/>
    </div>
  </button>
</template>

<script setup lang="ts">
import { getButtonClasses } from "~/utils/components/button";
import type { ButtonProps } from "~/types/components/button";
import { LOADING_ICON } from "~/constants/components/button";

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
  icon: '',
  iconRight: '',
});

const emit = defineEmits(['handleClick']);

const leftIcon = computed(() => props.loading ? LOADING_ICON : props.icon);
const rightIcon = computed(() => props.loading ? '' : props.iconRight);
const label = computed(() => props.loading ? 'Laden...' : props.label);

const classes = computed(() => getButtonClasses({
  ...props,
  hasLeftIcon: Boolean(leftIcon.value),
  hasRightIcon: Boolean(rightIcon.value)
}));

function handleClick() {
  if(props.disabled || props.loading) return
  emit('handleClick')
}
</script>