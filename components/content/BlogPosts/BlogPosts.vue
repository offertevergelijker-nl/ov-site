<template>
  <div :class="classes.section">
    <div :class="[classes.container, getWidth(props.containerWidth), 'text-center mb-12']">
      <Headline :label="props.headline"></Headline>
      <h3 :class="classes.title">{{ props.title }}</h3>
    </div>
    <div :class="[classes.container, getWidth(props.containerWidth), 'flex gap-x-8']">
      <BlogPostsColumn v-for="post in recentPosts" :post="post" :key="post.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import blogPosts from "~/data/blogPosts";

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
  title: 'text-4xl font-semibold',
}

const recentPosts = computed(() => {
  return [...blogPosts]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 4);
});
</script>