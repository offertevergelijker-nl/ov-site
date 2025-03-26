<template>
  <div class="bg-red-300 container">
    <slot name="icon" mdc-unwrap="p"/>
    <slot name="content" mdc-unwrap="p"/>
    <slot name="action" mdc-unwrap="p"/>
    <slot name="media" mdc-unwrap="p"/>
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>