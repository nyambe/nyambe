<script setup lang="ts">
const { header } = useAppConfig()
</script>

<template>
  <UHeader :to="header?.to || '/'">
    <template #left>
      <NuxtLink
        :to="header?.to || '/'"
        class="font-semibold text-lg"
      >
        {{ header?.title || '' }}
      </NuxtLink>
    </template>

    <template #right>
      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UHeader>
</template>
