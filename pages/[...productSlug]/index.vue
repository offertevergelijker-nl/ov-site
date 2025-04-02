<template>
  <HeroProduct v-if="product" :image="product.image" :title="productSlug" />
  <ProductValues v-if="product" :values="product.usps"/>
<!--  <ContentRenderer v-if="productPage" :value="productPage"/>-->
<!--  <pre>{{ productPage }}</pre>-->
  <pre>{{ product }}</pre>
</template>
<script lang="ts" setup>
import {GET_PRODUCT} from "~/queries/products";

const route = useRoute();
const productSlug = route?.params.productSlug[0];
const { data: productPage } = await useAsyncData(() => queryCollection('content').path('/products/' + productSlug).first());

const { response, refetch, loading, error } = useAuthQuery(GET_PRODUCT, {productSlug} ,true);
const product = computed(() => response.value?.productBySlug);

</script>