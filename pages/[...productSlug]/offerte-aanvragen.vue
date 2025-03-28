<template>
  <SkeletonLoader v-if="loading || !product"/>
  <div v-else class="fixed h-screen w-screen z-0 bg-black pointer-events-none">
    <NuxtImg v-if="product?.image" :fit="'cover'" :src="product.image" class="w-screen h-auto opacity-75"/>
  </div>
  <div v-if="product" class="container z-1 mx-auto pt-8 grid grid-cols-12 gap-6">
    <div class="col-span-1"/>
    <Card class="col-span-6">
      <FormStepper v-model="step" :steps="steps"/>
      <Heading class="mb-8">Ontvang snel en gemakkelijk offertes voor {{ product.name.toLowerCase() }}!</Heading>
      <FormLocation v-if="step === 0" v-model="input.location"/>
      <FormProduct v-else-if="step === 1" v-model="input.product" :productId="product.id"/>
      <FormCustomer v-else-if="step === 2" v-model="input.customer"/>

    </Card>
    <div class="col-span-3 flex flex-col gap-6">
      <Card class="text-center">
        <div class="w-64 h-64 bg-gray-200 mx-auto mb-4"/>
        <p>Offertevergelijker.nl krijgt x.x sterren uit x beoordelingen</p>
      </Card>
      <Card v-if="product?.usps">
        <Heading size="h3">Waarom {{ product.name }}?</Heading>
        <ul class="mt-4 mb-4">
          <li v-for="usp in product.usps" class="flex items-center gap-4 mb-2 text-size-lg">
            <Icon class="text-success-500" name="material-symbols:arrow-right-alt" size="1.5em"/>
            {{ usp.value }}
          </li>
        </ul>
      </Card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {GET_PRODUCT_BY_SLUG} from "ov-common/graphql/products/productQueries";
import type {InquiryCreateAnswerInput, InquiryCreateInput} from "~/types/inputTypes";
import type {InquiryCreateCustomerInput} from "ov-common/types/inquiries/inquiryTypes";

const route = useRoute();
const productSlug = Array.isArray(route.params.productSlug)
    ? route.params.productSlug[0]
    : route.params.productSlug as string;
const {response, loading} = useAuthQuery(GET_PRODUCT_BY_SLUG, {
  productSlug
})


const steps = [
  'Locatie',
  'Product',
  'Gegevens'
]
const step = ref<number>(2);

const product = computed(() => response.value?.productBySlug);
definePageMeta({
  layout: 'inquiry',

})

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}


useSeoMeta({
  title: `${capitalizeFirstLetter(productSlug)} offertes aanvragen`,
})

const productId = product?.value?.id;
const input = ref<InquiryCreateInput>({
  location: <InquiryCreateLocationInput>({}),
  customer: <InquiryCreateCustomerInput>({}),
  answers: <InquiryCreateAnswerInput[]>([]),
})

</script>