<template>
  <div class="sticky top-0 bg-white shadow-lg py-4 z-[999]">
    <div class="container mx-auto flex flex-wrap justify-between gap-y-4 items-center">
      <div class="bg-white">
        <div class="container">
          <img src="public/offertevergelijker_logo.png" alt="test" class="h-10.5"/>
        </div>
      </div>
      <div>
        <div class="flex gap-x-10">
          <Button
              v-for="(section, index) in sections"
              :key="section.id"
              :label="section.label"
              type="tertiary"
              isLink
              @handleClick="toggleSection(section.id)"
          />
        </div>

        <!-- Energie & Duurzaam -->
        <div
            v-if="activeSection === sections[0].id"
            class="absolute inset-0 top-18.5 h-fit w-full bg-white shadow-lg border-t border-gray-200 py-12"
        >
          <div class="relative container mx-auto w-fit flex gap-x-24">
            <div>
              <h4 class="text-lg mb-2">Besparing</h4>
              <Button label="Airconditioning" icon="ph:wind-bold" type="tertiary" size="lg" isLink :class="classes.button"/>
              <Button label="Infrarood panelen" icon="ph:cell-signal-full-bold" type="tertiary" size="lg" isLink :class="classes.button"/>
              <Button label="Laadpaal" icon="ph:plug-charging-bold" type="tertiary" size="lg" isLink :class="classes.button"/>
              <Button label="Thuisbatterij" icon="ph:battery-charging-vertical-bold" type="tertiary" size="lg" isLink :class="classes.button"/>
              <Button label="Warmtepomp" icon="ph:fire-bold" type="tertiary" size="lg" isLink :class="classes.button"/>
              <Button label="Zonnepanelen" icon="ph:sun-bold" type="tertiary" size="lg" isLink :class="classes.button"/>
            </div>
            <div>
              <h4 class="text-lg mb-2">Isolatie</h4>
              <Button label="Bodemisolatie" icon="material-symbols:close" type="tertiary" size="lg" isLink :class="classes.button"/>
              <Button label="Dakisolatie" icon="material-symbols:close" type="tertiary" size="lg" isLink :class="classes.button"/>
              <Button label="Spouwmuurisolatie" icon="material-symbols:close" type="tertiary" size="lg" isLink :class="classes.button"/>
              <Button label="Vloerisolatie" icon="material-symbols:close" type="tertiary" size="lg" isLink :class="classes.button"/>
            </div>
            <div>
              <h4 class="text-lg mb-2">Contract</h4>
              <Button label="Energiecontract" icon="ph:lightning-bold" type="tertiary" size="lg" isLink :class="classes.button"/>
            </div>
          </div>
        </div>

        <!-- Klussen & Verbouwen -->
        <div
            v-if="activeSection === sections[1].id"
            class="absolute inset-0 top-18.5 h-fit w-full bg-white shadow-lg border-t border-gray-200 py-12"
        >
          <div class="relative container mx-auto">
            test 2 - Klussen & Verbouwen content
          </div>
        </div>

        <!-- Verzekeringen -->
        <div
            v-if="activeSection === sections[2].id"
            class="absolute inset-0 top-18.5 h-fit w-full bg-white shadow-lg border-t border-gray-200 py-12"
        >
          <div class="relative container mx-auto">
            test 3 - Verzekeringen content
          </div>
        </div>
      </div>
      <div class="bg-white">
        <div class="flex gap-x-4">
          <Button label="Inschrijven als vakman" type="quaternary"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Section {
  id: string;
  label: string;
}

const sections = ref<Section[]>([
  { id: 'section-energie', label: 'Energie & Duurzaam' },
  { id: 'section-klussen', label: 'Klussen & Verbouwen' },
  { id: 'section-verzekeringen', label: 'Verzekeringen' }
]);

const activeSection = ref<string | null>(null);

const toggleSection = (sectionId: string) => {
  if (activeSection.value === sectionId) {
    activeSection.value = null;
  } else {
    activeSection.value = sectionId;
  }
};

const classes = {
  button: 'block mb-2 last:mb-0'
}
</script>