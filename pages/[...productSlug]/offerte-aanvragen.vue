<template>
  {{ product }}
  <!--  <SkeletonLoader v-if="loading || !product"/>-->
  <!--  <div v-else class="fixed h-screen w-screen z-0 bg-black pointer-events-none">-->
  <!--    <NuxtImg v-if="product?.image" :fit="'cover'" :src="product.image" class="w-screen h-auto opacity-75"/>-->
  <!--  </div>-->
  <!--  <div v-if="product" class="container z-1 mx-auto pt-8 grid grid-cols-12 gap-6">-->
  <!--    <div class="col-span-1"/>-->
  <!--    <Card class="col-span-6">-->
  <!--      <Heading class="mb-8">Ontvang snel en gemakkelijk offertes voor {{ product.name.toLowerCase() }}!</Heading>-->
  <!--      <hr class="my-4 border-gray-500">-->
  <!--      <FormStepper v-model="step" :steps="steps"/>-->
  <!--      {{ input }}-->
  <!--      <FormLocation v-if="step === 0" v-model="input.location"/>-->
  <!--      <FormProduct v-else-if="step === 1" v-model="input.product" :productSlug="productSlug"/>-->
  <!--      <FormCustomer v-else-if="step === 2" v-model="input.customer"/>-->
  <!--      <div class="flex flex-row items-center justify-between mt-8">-->

  <!--        <Button v-if="step !== 0" label="Terug" type="tertiary" @handleClick="handleStepBack()"/>-->
  <!--        <span v-else/>-->
  <!--        <Button v-if="step+1 !== steps.length" :label="`Stap ${step+2}: ${steps[step+1]}`"-->
  <!--                icon-right="material-symbols:arrow-right-alt"-->
  <!--                type="secondary" @handleClick="handleStepForward()"/>-->
  <!--        <Button v-else label="Aanvraag versturen" type="primary"/>-->
  <!--      </div>-->
  <!--    </Card>-->
  <!--    <div class="col-span-3 flex flex-col gap-6">-->
  <!--      <Card class="text-center">-->
  <!--        <div class="w-64 h-64 bg-gray-200 mx-auto mb-4"/>-->
  <!--        <p>Offertevergelijker.nl krijgt x.x sterren uit x beoordelingen</p>-->
  <!--      </Card>-->
  <!--      <Card v-if="product?.usps">-->
  <!--        <Heading size="h3">Waarom {{ product.name }}?</Heading>-->
  <!--        <ul class="mt-4 mb-4">-->
  <!--          <li v-for="usp in product.usps" class="flex items-center gap-4 mb-2 text-size-lg">-->
  <!--            <Icon class="text-success-500" name="material-symbols:arrow-right-alt" size="1.5em"/>-->
  <!--            {{ usp.value }}-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--      </Card>-->
  <!--    </div>-->
  <!--  </div>-->
</template>
<script lang="ts" setup>
const steps = [
  'Locatie',
  'Product',
  'Gegevens'
];
const step = ref<number>(0);
const route = useRoute();
const productSlug = Array.isArray(route.params.productSlug)
    ? route.params.productSlug[0]
    : route.params.productSlug as string;

const {data: product} = await useAsyncData('product_' + productSlug, () =>
    $fetch(`/api/product/${productSlug}`)
);


const handleStepForward = () => {
  if (step.value !== steps.length - 1) {
    step.value++;
  }
}

const handleStepBack = () => {
  if (step.value !== steps.length) {
    step.value--;
  }
}
</script>