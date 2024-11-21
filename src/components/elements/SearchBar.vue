<template>
  <div class="flex items-center space-x-2">
    <input
      :disabled="isLoading"
      v-model="localSearchKeyword"
      type="text"
      placeholder="Search videos"
      class="flex-grow border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-rose-500"
    />
    <button
      :disabled="isLoading"
      @click="onSearch"
      class="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 focus:outline-none focus:ring focus:ring-rose-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span>
        <svg class="w-4 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    searchKeyword: {
      type: String,
      required: true,
    },
  },
  computed: {
    localSearchKeyword: {
      get() {
        return this.searchKeyword;
      },
      set(value) {
        this.$emit("update:searchKeyword", value);
      },
    },
  },
  methods: {
    onSearch() {
      this.$emit("search");
    },
  },
};
</script>
