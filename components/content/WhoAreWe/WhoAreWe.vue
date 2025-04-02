<template>
  <div :class="classes.section">
    <div :class="[classes.container.base, getWidth(props.containerWidth)]">
      <NuxtImg src="assets/pattern.jpeg" :class="[classes.image]" />
      <div :class="classes.container.inner">
        <div :class="[classes.column.container, 'w-1/2']">
          <div :class="classes.column.content">
            <h3 :class="classes.title">Wie is Offertevergelijker?</h3>
            <p :class="classes.intro">Vergelijken doen we allemaal en altijd. Of het nou gaat om
              het kiezen van de juiste avocado, de leukste vakantie of het
              beste bedrijf voor jouw klus.</p>
            <p :class="classes.text">Via Offertevergelijker vraag je vrijblijvend offertes aan
              van bedrijven die bij jou in de regio actief zijn. Door de
              offertes met elkaar te vergelijken, ontdek je eenvoudig de
              verschillen op het gebied van prijs, ervaring en garantie.
              Zo vind je gemakkelijk het bedrijf dat bij jou past en bespaar
              je vaak ook nog eens veel geld!</p>
            <Button label="Vergelijk offertes" type="quaternary"/>
          </div>
        </div>
        <div :class="[classes.column.container, 'w-1/2']">
          <div :class="classes.column.content">
            <NuxtImg :src="props.image" class="aspect-square object-cover rounded-xl"/>
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
    default: 'full'
  },
  image: {
    type: String,
    default: '/'
  }
});

const classes = {
  section: 'relative p-24',
  container: {
    base: 'relative container mx-auto p-8',
    inner: 'relative flex items-center gap-x-12 bg-white rounded-2xl p-12'
  },
  image: 'absolute container mx-auto inset-0 right-0 object-cover rounded-3xl w-full h-full z-0',
  column: {
    container: 'relative bg-white',
    content: 'relative'
  },
  title: 'text-4xl font-semibold mb-6',
  intro: 'relative font-medium mb-2 pl-5 before:absolute before:inset-0 before:bg-secondary-500 before:h-full before:w-1 before:z-10',
  text: 'text-lg mb-8'
}
</script>