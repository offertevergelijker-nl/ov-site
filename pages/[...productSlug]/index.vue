<template>
<ContentRenderer v-if="productPage" :value="productPage"/>
</template>
<script lang="ts" setup>
const route = useRoute();
const productSlug = route.params.productSlug as string;
const { data: productPage } = await useAsyncData(() => queryCollection('content').path('/products/' + productSlug).first())
</script>