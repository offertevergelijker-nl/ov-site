<template>
  <div :class="[classes.section.base]">
<!--    <NuxtImg :src="props.image" :class="classes.image"/>-->
    <div :class="[classes.container, getWidth(props.containerWidth)]">
      <h2 :class="classes.title">{{ props.title }}</h2>
      <p class="text-2xl mb-8">Meer dan <span class="font-bold text-quaternary-500">50.000</span> mensen gingen je voor.</p>
      <div :class="classes.form">
        <FormSelect v-model="vNull" placeholder="Kies een categorie" class="mr-1">
          <option v-for="product in products" :value="product.id" :key=product.id>
            {{ product.name }}
          </option>
        </FormSelect>
        <FormInput type="text" placeholder="Jouw postcode..." class="mr-1"/>
        <Button label="Vergelijk offertes" type="secondary"/>
      </div>
      <p>Wij scoren een <span class="font-bold text-quaternary-500">8.7</span> uit ruim <span class="font-bold text-quaternary-500">120.000</span> klantbeoordelingen!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {GET_PRODUCTS} from "ov-common/graphql/products/productQueries";

const props = defineProps({
  containerWidth: {
    type: String,
    default: 'two-thirds'
  },
  image: {
    type: String,
    default: '/'
  },
  title: {
    type: String,
    default: ''
  },
});

const vNull = ref(null);

const { response } = useAuthQuery(GET_PRODUCTS, true);
const products = computed(() => response.value?.products || []);

const classes = {
  section: {
    base: 'relative py-48',
    before: 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/60 before:to-black/30 before:h-full before:w-full before:z-10'
  },
  image: 'absolute top-0 object-cover h-full w-full z-0',
  container: 'relative container mx-auto text-center z-20',
  title: 'text-6xl font-bold mb-4',
  form: 'flex bg-white rounded-lg w-fit p-2 mx-auto mb-2',
}
</script>