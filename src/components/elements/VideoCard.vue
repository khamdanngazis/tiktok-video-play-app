<template>
    <!-- Video Content -->
    <div class="p-4">
      <blockquote
        class="tiktok-embed"
        :cite="video.url"
        :data-video-id="video.id"
        style="max-width: 100%;"
        data-embed-from="oembed"
      >
        <section>
          <a
            target="_blank"
            :title="video.user"
            :href="video.userUrl"
            class="text-rose-500 hover:underline"
          >
            {{ video.user }}
          </a>
          <p class="text-gray-600 mt-2">
            Check out this cool video from TikTok!
          </p>
          <a
            target="_blank"
            :title="video.url"
            :href="video.url"
            class="text-rose-500 hover:underline"
          >
            View on TikTok
          </a>
        </section>
      </blockquote>
    </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Scoped styles if needed, but Tailwind CSS manages most styling */
</style>
