<template>
  {{home}}
  <ContentRenderer v-if="home" :value="home"/>
  <div v-else>test</div>
</template>
<script lang="ts" setup>
const route = useRoute();
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
</script>