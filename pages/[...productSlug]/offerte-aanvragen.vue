<template>
  <ContentRenderer v-if="productInquiryPage" :value="productInquiryPage"/>
  {{productInquiryPage}}
</template>
<script lang="ts" setup>
import {useAsyncData} from "#app";

const route = useRoute();
const productSlug = route.params.productSlug as string;
const { data: productInquiryPage } = await useAsyncData(() => queryCollection('content').path('/products/' + productSlug + '/offerte-aanvragen').first())
</script>