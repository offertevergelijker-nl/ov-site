<template>
  <div :class="classes.section">
    <div :class="[classes.container, 'flex justify-between']">
      <div :class="[classes.column.container, 'w-1/4']">
        <div :class="classes.column.content">
          <NuxtImg src="offertevergelijker_logo_white.png" class="h-10.5 mb-4"/>
          <p class="text-lg mb-6">
            Offertevergelijker is dé vergelijkingswebsite voor bouw- en verbouwklussen van Nederland.
          </p>
          <Icon name="mdi:facebook" size="1.5rem" class="mr-1"/>
          <Icon name="mdi:instagram" size="1.5rem" class="mr-1"/>
          <Icon name="mdi:linkedin" size="1.5rem"/>
        </div>
      </div>
      <div :class="[classes.column.container, 'flex justify-between w-2/4']">
        <div :class="[classes.column.content]">
          <h4 class="font-semibold mb-4">Poducten & diensten</h4>
          <ul class="space-y-2">
            <li>Energie & duurzaam</li>
            <li>Klussen & wonen</li>
            <li>Verzekeringen</li>
          </ul>
        </div>
        <div :class="[classes.column.content]">
          <h4 class="font-semibold mb-4">Bedrijven</h4>
          <ul class="space-y-2">
            <li>Aanmelden</li>
            <li>Inloggen</li>
            <li>Overzicht</li>
            <li>Beoordelingen</li>
            <li>Affiliate inloggen</li>
          </ul>
        </div>
        <div :class="[classes.column.content]">
          <h4 class="font-semibold mb-4">Offertevergelijker</h4>
          <ul class="space-y-2">
            <li>Over ons</li>
            <li>Hoe het werkt</li>
            <li>Blog</li>
            <li>Vacatures</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <hr class="border-gray-500"/>
  <div :class="classes.section">
    <div :class="[classes.container, 'flex text-sm']">
      <div :class="[classes.column.container, 'w-1/2']">
        <div :class="classes.column.content">
          <p>
            © <a href="https://offertevergelijker.nl/" class="underline">Offertevergelijker</a>
            2019 - {{ new Date().getFullYear() }}
          </p>
        </div>
      </div>
      <div :class="[classes.column.container, 'w-1/2']">
        <div :class="[classes.column.content, 'text-right']">
          <p>
            <a href="#" class="underline">Cookie Policy</a> -
            <a href="#" class="underline">Disclaimer</a> -
            <a href="#" class="underline">Privacy</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const classes = {
  section: 'relative bg-secondary-900 py-12',
  container: 'relative container mx-auto text-white',
  column: {
    container: 'relative',
    content: 'relative'
  },
}
</script>
