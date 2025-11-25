<script setup lang="ts">
definePageMeta({
  layout: 'minimal'
})

const { data: allDocs } = await useAsyncData('articles', () =>
  queryCollection('docs').all()
)

const articles = computed(() =>
  allDocs.value?.filter(doc => doc.path?.includes('/articles/')) || []
)

useSeoMeta({
  title: 'Thoughts',
  description: 'Thoughts on code, creation, and craft'
})
</script>

<template>
  <UContainer class="py-12">
    <div class="space-y-16">
      <div class="space-y-4">
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold">
          thoughts
        </h1>
        <p class="text-xl opacity-70">
          on code, creation, and craft
        </p>
      </div>

      <div v-if="articles && articles.length > 0" class="space-y-8">
        <NuxtLink
          v-for="article in articles"
          :key="article.path"
          :to="article.path"
          class="block group space-y-2 py-6 border-b border-orange-200 dark:border-orange-900 hover:border-orange-400 dark:hover:border-orange-600 transition-colors"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="space-y-2 flex-1">
              <h2 class="text-3xl md:text-4xl font-bold group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {{ article.title }}
              </h2>
              <p v-if="article.description" class="text-lg opacity-70">
                {{ article.description }}
              </p>
              <div v-if="article.tags && article.tags.length" class="flex flex-wrap gap-2 pt-2">
                <span
                  v-for="tag in article.tags"
                  :key="tag"
                  class="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <span v-if="article.category" class="text-xs opacity-50 uppercase tracking-wider">
              {{ article.category }}
            </span>
          </div>
        </NuxtLink>
      </div>

      <div v-else class="py-12 text-center opacity-50">
        <p class="text-xl">No thoughts yet. Check back soon.</p>
      </div>
    </div>
  </UContainer>
</template>
