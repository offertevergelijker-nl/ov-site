<template>
  <div :class="[classes.section.base, classes.section.before]">
    <NuxtImg :src="props.image" :class="classes.image"/>
    <div :class="[classes.container, getWidth(props.containerWidth)]">
      <div :class="[classes.column.container]">
        <div :class="classes.column.content">
          <h2 :class="classes.title">{{ props.title }}</h2>
          <div :class="classes.form">
            <FormSection>
              <FormInput type="text" placeholder="Jouw postcode..." :colWidth="6"/>
              <Button label="Vergelijk offertes" type="quaternary" fullWidth textCenter class="col-span-6"/>
            </FormSection>
            <p class="text-xs text-center text-gray-900 mt-2">Al je aanvragen zijn gratis en vrijblijvend</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  title: 'text-7xl font-bold capitalize mb-6',
  form: 'bg-white rounded-lg w-1/3 p-2 mx-auto mb-4',
}
</script>