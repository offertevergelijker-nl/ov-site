<template>
  <div class="mt-12">
    <div class="bg-secondary-700 shadow text-xs text-white fixed bottom-0 w-full h-12 flex items-center justify-center">
      <div class="grid grid-cols-12 container mx-auto justify-between">
        <div class="flex flex-row gap-4 col-span-8 underline">
          <NuxtLink>Vergelijken</NuxtLink>
          <NuxtLink>Over ons</NuxtLink>
          <NuxtLink>Aanmelden als bedrijf</NuxtLink>
        </div>
        <div class="col-span-4 text-right">&copy; {{ new Date().getFullYear() }} Offertevergelijker.nl</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>