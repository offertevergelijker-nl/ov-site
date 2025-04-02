<template>
  <div :class="[classes.section.base, classes.section.before]">
    <NuxtImg :src="props.image" :class="classes.image"/>
    <div :class="[classes.container, getWidth(props.containerWidth)]">
      <div :class="[classes.column.container]">
        <div :class="classes.column.content">
          <h2 :class="classes.title">{{ props.title }}</h2>
          <p class="text-xl mb-6">Meer dan <span class="font-bold text-quaternary-500">50.000</span> mensen gingen je voor.</p>
          <div :class="classes.form">
            <FormSection>
              <FormSelect v-model="vNull" placeholder="Kies een klus" :colWidth="6">
                <option v-for="product in products" :value="product.id" :key=product.id >
                  {{ product.name }}
                </option>
              </FormSelect>
              <FormInput type="text" placeholder="Jouw postcode..." :colWidth="6"/>
              <Button label="Vergelijk offertes" type="quaternary" fullWidth textCenter class="col-span-12"/>
            </FormSection>
            <p class="text-xs text-center text-gray-900 mt-2">Al je aanvragen zijn gratis en vrijblijvend</p>
          </div>
          <p>Wij scoren een <span class="font-bold text-quaternary-500">8.7</span> uit ruim <span class="font-bold text-quaternary-500">120.000</span> klantbeoordelingen!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {GET_PRODUCTS} from "ov-common/graphql/products/productQueries";

const props = defineProps({
  containerWidth: {
    type: String,
    default: 'three-quarters'
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
    base: 'relative py-36 bg-gray-100',
    before: 'before:absolute before:inset-0 before:bg-gray-900/25 before:h-full before:w-full before:z-10'
  },
  image: 'absolute top-0 right-0 object-cover h-full w-full z-0',
  container: 'relative container text-center text-white mx-auto z-20',
  column: {
    container: 'relative',
    content: ''
  },
  title: 'text-7xl font-bold mb-2',
  form: 'bg-white rounded-lg w-1/3 p-2 mx-auto mb-4',
}
</script>