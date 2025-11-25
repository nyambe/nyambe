<script setup lang="ts">
const props = defineProps<{
  artist: string
  song: string
  url: string
}>()

const createTweet = (liked: boolean) => {
  const reaction = liked ? '👍 loved' : '🤔 wasn\'t my thing'
  const text = `Hey @samiebuka, I visited your profile and ${reaction} "${props.song}" by ${props.artist}!`
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
  window.open(tweetUrl, '_blank')
}
</script>

<template>
  <div class="inline-flex items-center gap-3 flex-wrap">
    <a
      :href="url"
      target="_blank"
      class="text-orange-600 dark:text-orange-400 underline font-bold text-2xl"
    >
      {{ song }}
    </a>
    <span class="opacity-50">by {{ artist }} did you</span>
    <div class="flex gap-2">
      <button
        @click="createTweet(true)"
        class="text-xs cursor-pointer px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
      >
        love it
      </button>
      or
      <button
        @click="createTweet(false)"
        class="text-xs cursor-pointer px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
      >
        is not my thing
      </button>
    </div>
  </div>
</template>
