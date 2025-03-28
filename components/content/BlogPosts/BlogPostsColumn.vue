<template>
  <div :class="[classes.container.base, classes.container.hover]">
    <div :class="classes.content.base">
      <NuxtImg :src="post.image" :class="classes.image"/>
      <div :class="classes.content.inner">
        <h5 :class="[classes.title.base, classes.title.hover]">{{ post.title }}</h5>
        <p :class="classes.text">{{ post.content }}</p>
        <Button @handleClick="navigateTo(post.link)" label="Lees verder" iconRight="material-symbols:chevron-right-rounded" type="secondary" isLink/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from "~/data/blogPosts";

const props = defineProps<{
  post: BlogPost
}>();

const classes = {
  container: {
    base: 'group relative top-0 shadow-xl rounded-lg transition-all duration-200',
    hover: 'hover:shadow-2xl hover:-top-1'
  },
  content: {
    base: 'relative',
    inner: 'border border-gray-200 border-t-0 rounded-lg rounded-t-none p-4'
  },
  image: 'rounded-lg rounded-b-none aspect-video w-full object-cover',
  title: {
    base: 'text-lg font-semibold mb-2 transition-all duration-200',
    hover: 'group-hover:text-quaternary-500',
  },
  text: 'text-lg line-clamp-3 overflow-hidden mb-6',
}
</script>