<template>
  <div class="container mx-auto p-6">
    
    <!-- Search Bar -->
    <SearchBar
      :isLoading="isLoading"
      v-model:searchKeyword="searchKeyword"
      @search="initiateSearch"
    />
    
    <!-- Video List -->
    <VideoList
      :visibleVideos="visibleVideos"
      :isLoading="isLoading"
    />
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from '../components/elements/SearchBar.vue'
import VideoList from '../components/fragments/VideoList.vue';

export default {
  components: { SearchBar, VideoList },
  data() {
    return {
      searchKeyword: "", // Default search keyword
      videos: [], // All fetched videos
      visibleVideos: [], // Videos currently displayed
      isLoading: false, // Loading state
      increment: 5, // Number of videos to load on scroll
    };
  },
  methods: {
    async fetchVideos() {
      try {
        this.isLoading = true;

        const response = await axios.get(
          `http://localhost:8080/search?keyword=${this.searchKeyword}`
        );

        // Map and store all videos from the response
        this.videos = response.data.map((video) => ({
          id: video.id,
          user: video.user,
          url: video.url,
          userUrl: `https://www.tiktok.com/${video.user}?refer=embed`,
        }));

        // Display the first batch of videos
        this.visibleVideos = this.videos.slice(0, this.increment);

        // Dynamically load TikTok embed script
        this.loadTikTokEmbedScript();
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        this.isLoading = false;
      }
    },
    loadTikTokEmbedScript() {
      const existingScript = document.querySelector(
        'script[src="https://www.tiktok.com/embed.js"]'
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        existingScript.remove(); // Remove and re-add to reinitialize embeds
        this.loadTikTokEmbedScript();
      }
    },
    loadMoreVideos() {
      // Load the next batch of videos
      const nextBatch = this.visibleVideos.length + this.increment;
      this.visibleVideos = this.videos.slice(0, nextBatch);
    },
    initiateSearch() {
      this.videos = [];
      this.visibleVideos = [];
      this.fetchVideos();
    },
    handleScroll() {
      const bottomOfPage =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (bottomOfPage && this.visibleVideos.length < this.videos.length) {
        this.loadMoreVideos();
      }
    },
  },
  mounted() {
    this.fetchVideos(); // Fetch videos on component mount
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
/* Scoped styles are empty since Tailwind CSS handles styling */
</style>
