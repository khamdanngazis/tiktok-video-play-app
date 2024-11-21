<template>
  <div class="flex flex-col items-center justify-center mt-20 space-y-4 text-gray-500">
    <!-- Illustration -->
    <svg class="w-16 h-16 text-rose-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-6h6v6m-3-6V9m-5 8h10a1 1 0 001-1V7a1 1 0 00-1-1H8a1 1 0 00-1 1v10a1 1 0 001 1z" />
    </svg>
    <!-- Message -->
    <p class="text-lg font-medium text-gray-600">No videos found</p>
    <p class="text-sm text-gray-400">Try searching for something else or refresh the page!</p>
  </div>
</template>

<script>
export default {
  name: "NoContentMessage",
};
</script>

<style scoped>
/* Scoped styles if needed, otherwise Tailwind CSS handles styling */
</style>
