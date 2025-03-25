<template>
  <ContentRenderer v-if="post" :value="post"/>
  <div v-else>Page not loaded</div>
</template>
<script lang="ts" setup>
const route = useRoute();
const { data: post } = await useAsyncData('content', () => queryCollection('content').path('/content' + route.path).all())

</script>
