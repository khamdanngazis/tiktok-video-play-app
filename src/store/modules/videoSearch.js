// store/modules/videoSearch.js

import axios from 'axios';

export default {
  namespaced: true,
  state: {
    searchKeyword: "",
    videos: [],
    visibleVideos: [],
    isLoading: false,
    increment: 5,
  },
  mutations: {
    setVideos(state, videos) {
      state.videos = videos;
      state.visibleVideos = videos.slice(0, state.increment);
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    appendVideos(state, videos) {
      state.visibleVideos.push(...videos);
    },
    setSearchKeyword(state, keyword) {
      state.searchKeyword = keyword;
    },
  },
  actions: {
    async fetchVideos({ state, commit }) {
      try {
        commit('setLoading', true);
        const response = await axios.get(`http://localhost:8080/search?keyword=${state.searchKeyword}`);
        const videos = response.data.map((video) => ({
          id: video.id,
          user: video.user,
          url: video.url,
          userUrl: `https://www.tiktok.com/${video.user}?refer=embed`
        }));
        commit('setVideos', videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        commit('setLoading', false);
      }
    },
    initiateSearch({ commit, dispatch }) {
      commit('setVideos', []);
      dispatch('fetchVideos');
    },
    loadMoreVideos({ state, commit }) {
      const nextBatch = state.visibleVideos.length + state.increment;
      commit('appendVideos', state.videos.slice(nextBatch, nextBatch + state.increment));
    },
    handleScroll({ state, dispatch }) {
      const bottomOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (bottomOfPage && state.visibleVideos.length < state.videos.length) {
        dispatch('loadMoreVideos');
      }
    }
  }
};
