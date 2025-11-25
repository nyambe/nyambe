<script setup lang="ts">
definePageMeta({
  layout: 'minimal'
})

const { data: page } = await useAsyncData('index', () => queryCollection('landing').path('/').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: '/1704797230944.jpeg',
  twitterCard: 'summary_large_image',
  twitterImage: '/1704797230944.jpeg'
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>
