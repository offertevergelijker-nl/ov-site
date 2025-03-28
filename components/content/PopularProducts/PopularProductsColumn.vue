<template>
  <div class="group" :class="classes.container">
    <NuxtImg src="assets/home/pexels-ensar-84745078-17785614.jpg" :class="classes.image" />
    <div :class="classes.overlay"></div>
    <div :class="classes.content">
      <h4 :class="classes.title">
        <slot mdc-unwrap="p"/>
      </h4>
      <Button
          label="meer weten"
          isLink
          @handleClick="navigateTo(props.link)"
          :class="classes.button"
      />
    </div>
    <div :class="classes.hoverIndicator"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    default: '#',
  }
});

const classes = {
  container: 'relative overflow-hidden rounded-2xl shadow-lg h-96 w-full cursor-pointer transition-all duration-500 hover:shadow-2xl',
  image: 'absolute inset-0 object-cover h-full w-full z-0 transition-transform duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-105',
  overlay: 'absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 z-10 transition-opacity duration-500 group-hover:opacity-80',
  content: 'absolute inset-x-0 bottom-0 p-8 flex flex-col items-center z-20 transform transition-transform duration-500 group-hover:translate-y-[-8px]',
  title: 'text-xl font-bold mb-6 text-white tracking-wide',
  button: 'opacity-90 hover:opacity-100 transition-all duration-300 transform group-hover:scale-105',
  hoverIndicator: 'absolute bottom-0 left-0 w-0 h-1 bg-primary-500 z-20 transition-all duration-500 group-hover:w-full'
}
</script>