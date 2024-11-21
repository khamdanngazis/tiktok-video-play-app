<template>
  <div class="mt-6">
    <div
      v-if="visibleVideos.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div
        v-for="video in visibleVideos"
        :key="video.id"
        class="border border-gray-300 rounded-lg overflow-hidden shadow-md"
      >
        <!-- Video Content -->
        <VideoCard :video="video" />
      </div>
    </div>

    <!-- No Content Message -->
    <NoContentMessage v-else-if="!isLoading" />

    <!-- Loading Spinner -->
    <LoadingBar v-if="isLoading" />
  </div>
</template>

<script>
import VideoCard from '../elements/VideoCard.vue';
import NoContentMessage from '../elements/NoContentMessage.vue';
import LoadingBar from '../elements/LoadingBar.vue';

export default {
  components: {
    VideoCard,
    NoContentMessage,
    LoadingBar
  },
  props: {
    visibleVideos: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
/* Scoped styles for Video List component */
</style>
