<script setup lang="ts">
definePageMeta({
  layout: 'minimal'
})

const { data: articles } = await useAsyncData('articles', () =>
  queryCollection('docs')
    .order('date', 'DESC')
    .all()
)

useSeoMeta({
  title: 'Articles',
  description: 'Writings and tutorials on web development, Vue, Nuxt, TypeScript, and more'
})
</script>

<template>
  <UContainer class="py-12">
    <div class="space-y-16">
      <div class="space-y-4">
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold">
          articles
        </h1>
        <p class="text-xl opacity-70">
          thoughts on code, creation, and craft
        </p>
      </div>

      <div v-if="articles && articles.length > 0" class="space-y-8">
        <NuxtLink
          v-for="article in articles"
          :key="article.path"
          :to="article.path"
          class="block group space-y-2 py-6 border-b border-orange-200 dark:border-orange-900 hover:border-orange-400 dark:hover:border-orange-600 transition-colors"
        >
          <h2 class="text-3xl md:text-5xl font-bold group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
            {{ article.title }}
          </h2>
          <p v-if="article.description" class="text-lg opacity-70">
            {{ article.description }}
          </p>
        </NuxtLink>
      </div>

      <div v-else class="py-12 text-center opacity-50">
        <p class="text-xl">No articles yet. Check back soon.</p>
      </div>
    </div>
  </UContainer>
</template>
