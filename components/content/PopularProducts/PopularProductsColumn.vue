<template>
  <div :class="classes.container">
    <NuxtImg src="assets/home/pexels-ensar-84745078-17785614.jpg" :class="classes.image" />
    <div :class="classes.overlay"></div>
    <div :class="classes.content">
      <h4 :class="classes.title">
        <slot mdc-unwrap="p"/>
      </h4>
      <Button
          label="meer weten"
          type="white"
          size="lg" isLink
          @handleClick="navigateTo(props.link)"
      />
    </div>
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
  container: 'relative overflow-hidden rounded-xl shadow-lg h-96 w-full cursor-pointer',
  image: 'absolute inset-0 object-cover h-full w-full z-0',
  overlay: 'absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent z-10',
  content: 'absolute inset-x-0 bottom-0 p-8 flex flex-col items-center z-20',
  title: 'text-xl font-bold mb-2 text-white',
}
</script>