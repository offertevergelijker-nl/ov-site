<template>
  <ContentRenderer v-if="productInquiryPage" :value="productInquiryPage"/>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'inquiry'
})
const route = useRoute();
const productSlug = route.params.productSlug as string;
const {data: productInquiryPage} = await useAsyncData(() => queryCollection('content').path('/products/' + productSlug + '/offerte-aanvragen').first())
</script>