<template>
  <div class="mb-16">
    <div class="bg-white shadow fixed top-0 w-full h-16 flex items-center justify-center">
      <div class="grid-cols-12 container mx-auto">
        <div class="flex flex-row gap-4 items-center">
          <Button icon="material-symbols:arrow-left" label="Terug" size="sm" type="tertiary" @handleClick="handleBack"/>
          <NuxtLink to="/">
            <NuxtImg alt="Offertevergelijker.nl" fit="inside" format="webp" quality="100"
                     src="offertevergelijker_logo.png"
                     width="128"/>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter();
const handleBack = () => {
  router.back();
}
</script>