<template>
  <a v-if="href && type != 'link'" :href="href" :class="getTypeClasses(type)">
    <slot />
  </a>
  <a v-else-if="href && type == 'link'" :href="href" :class="getTypeClasses(type)">
    <slot />
    <Icon v-if="icon" name="material-symbols:arrow-right-alt-rounded" :class="iconClasses"/>
  </a>
  <button v-else class="bg-secondary-500 py-1 px-2 border border-solid border-secondary-400 rounded text-white hover:bg-secondary-400 transition duration-100">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '#'
  },
  type: {
    type: String,
    default: 'secondary'
  },
  icon: {
    type: Boolean,
    default: false
  }
});

const iconClasses = 'group-hover:ml-2';

const getTypeClasses = (type: string) => {
  const baseClasses = 'block border border-solid rounded w-max py-2 px-3 transition duration-100';
  const linkClasses = 'flex flex-row items-center w-max gap-x-2 transition duration-100 group';

  switch (type) {
    case 'secondary':
      return `${baseClasses} bg-secondary-500 border-secondary-400 text-white hover:bg-secondary-400`;
    case 'primary':
      return `${baseClasses} bg-primary-500 border-primary-400 text-white hover:bg-primary-400`;
    case 'link':
      return `${linkClasses} text-primary-500 hover:text-primary-400`;
    default:
      return ''
  }
}
</script>