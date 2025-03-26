<template>
<!--  {{home}}-->
  <div v-if="home" class="container mx-auto">
    <ContentRenderer :value="home"/>
  </div>
  <div v-else>test</div>
</template>
<script lang="ts" setup>
const route = useRoute();
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
</script>