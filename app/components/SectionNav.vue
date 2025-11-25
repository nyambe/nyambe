<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const sections = [
  { id: 'intro', label: 'intro' },
  { id: 'blog', label: 'thoughts & writing' },
  { id: 'external', label: 'external writing' },
  { id: 'projects', label: 'projects' }
]

const activeSection = ref('intro')

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 100

  for (let i = sections.length - 1; i >= 0; i--) {
    const element = document.getElementById(sections[i].id)
    if (element && element.offsetTop <= scrollPosition) {
      activeSection.value = sections[i].id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <div class="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
    <nav class="flex flex-col gap-4">
      <button
        v-for="section in sections"
        :key="section.id"
        @click="scrollToSection(section.id)"
        :class="[
          'group relative w-3 h-3 rounded-full border-2 transition-all duration-300',
          activeSection === section.id
            ? 'bg-orange-500 border-orange-500 scale-125'
            : 'bg-transparent border-orange-300 dark:border-orange-700 hover:border-orange-500 hover:scale-110'
        ]"
        :aria-label="`Scroll to ${section.label}`"
      >
        <span
          class="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 bg-orange-900 dark:bg-orange-100 text-orange-50 dark:text-orange-900 text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        >
          {{ section.label }}
        </span>
      </button>
    </nav>
  </div>
</template>
