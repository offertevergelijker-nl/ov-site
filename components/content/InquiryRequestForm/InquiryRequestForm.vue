<template>
  <div class="container mx-auto grid grid-cols-12 gap-6 py-6">
    <Card :class="parsedClass" :icon="icon" :title="heading">
      <Stepper v-model="step" :steps="steps"/>
      <hr class="border-gray-200 mt-2 mb-8">
      <FormLocation v-if="step === 0" v-model="input.location"/>
      <FormProduct v-if="step === 1 && productId" v-model="input.product" :productId="Number(productId)"/>
      <FormCustomer v-if="step === 2" v-model="input.customer"/>
    </Card>
    <div class="flex flex-col gap-6 col-span-3">
      <Card v-if="withRatings">
        <slot name="ratings"/>
      </Card>
      <Card v-if="withUsps">
        <slot name="USPs"/>
      </Card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Stepper from "ov-common/components/Form/Stepper.vue";
import type {
  InquiryCreateAnswerInput,
  InquiryCreateCustomerInput,
  InquiryCreateInput,
  InquiryCreateLocationInput,
  InquiryCreateMetaInput
} from "~/types/inputTypes";

interface Props {
  productId: string
  heading?: string
  icon?: string
  withRatings: boolean
  withUsps: boolean
}

const props = withDefaults(defineProps<Props>(), {
  heading: "Product aanvragen",
  icon: "material-symbols:list",
  withRatings: true,
  withUsps: true,
});

const steps = [
  'Stap 1: Locatie',
  'Stap 2: Opdracht',
  'Stap 3: Gegevens'
];
const step = ref<number>(2);
const input = ref<InquiryCreateInput>({
  location: <InquiryCreateLocationInput>{},
  customer: <InquiryCreateCustomerInput>{},
  meta: <InquiryCreateMetaInput>{},
  answers: <InquiryCreateAnswerInput>{},

});

const parsedClass = computed(() => {
  if (props.withRatings || props.withUsps) {
    return 'col-span-7';
  } else {
    return 'col-span-12';
  }
})

</script>