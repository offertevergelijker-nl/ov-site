<template>
  <div class="h-16 w-full animate-pulse bg-gray-200" v-if="loading"> Laden... </div>
  <form action="#" @submit.prevent v-else>
    <slot name="heading"/>
    <fieldset v-for="question in product.form.questions" class="mb-4">
      <label class="block" :for="`question-${question.id}`">{{question.label}}</label>
      <input type="text" v-if="question.inputType.type === 'text'">
      <template v-if="question.inputType.type === 'radio'">
        <div v-for="option in question.options">
          <input class="mr-2" type="radio" :id="`option-${option.id}`" :value="option.id" :name="question.key"/>
          <label :for="`option-${option.id}`">{{option.label}}</label>
        </div>
      </template>
      <template v-if="question.inputType.type === 'checkbox'">
        <template v-for="option in question.options">
          <input type="checkbox" :id="`option-${option.id}`" :value="option.id" :name="question.key"/>
          <label :for="`option-${option.id}`">{{option.label}}</label>
        </template>
      </template>
      <textarea v-if="question.inputType.type === 'textarea'"/>
    </fieldset>
    <UiButton type="primary">Aanvraag versturen</UiButton>
  </form>
</template>
<script lang="ts" setup>
interface Props {
  productId: number|string
}
const props = defineProps<Props>();
const loading = ref<boolean>(true);
const query = gql`
  query GetProductForWebsite($productId: ID!) {
    product(productId: $productId) {
      id
      name
      form{
        id
        questions{
          id
          label
          key
          inputType{
            type
          }
          options{
              id
              label
          }
        }
      }
    }
  }
`

const mutation = gql`
    mutation StoreProductFromWebsite($productId: ID!, $input: InquiryCreateInput!) {
        inquiryCreate(productId: $productId, input: $input)
    }
`

const { data, refresh } = useAsyncQuery(query, {
  productId: props.productId
});
const {mutate} = useMutation(mutation)


const product = computed(() => data?.value?.product);

watch(props, () => {
  if(props.productId) {
    refresh();
  }
}, {
  immediate: true
})

watch(data, () => {
  if(data?.value){
    loading.value = false;
  }
}, {
  immediate: true
})

const handleSubmit = () => {

}

</script>