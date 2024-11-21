<template>
  <div class="container mx-auto p-6">
    <!-- Search Bar -->
    <SearchBar
      :isLoading="isLoading"
      v-model:searchKeyword="searchKeyword"
      @search="initiateSearch"
    />
    
    <!-- Video List -->
    <VideoList :visibleVideos="visibleVideos" :isLoading="isLoading" />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted, onBeforeUnmount } from 'vue';
import SearchBar from '../elements/SearchBar.vue';
import VideoList from '../fragments/VideoList.vue';

export default {
  components: { SearchBar, VideoList },
  setup() {
    const store = useStore();

    const searchKeyword = computed(() => store.state.videoSearch.searchKeyword);
    const visibleVideos = computed(() => store.state.videoSearch.visibleVideos);
    const isLoading = computed(() => store.state.videoSearch.isLoading);

    // Methods to dispatch actions
    const initiateSearch = () => {
      store.dispatch('videoSearch/initiateSearch');
    };

    const handleScroll = () => {
      store.dispatch('videoSearch/handleScroll');
    };

    onMounted(() => {
      store.dispatch('videoSearch/fetchVideos');
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      searchKeyword,
      visibleVideos,
      isLoading,
      initiateSearch,
    };
  },
};
</script>

<style scoped>
/* Scoped styles are empty since Tailwind CSS handles styling */
</style>
