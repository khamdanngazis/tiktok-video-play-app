<template>
  <div class="video-player">
    <video ref="video" :src="video?.src" controls class="w-full h-full"></video>
  </div>
</template>

<script>
export default {
  props: {
    video: Object,
  },
};
</script>

<style scoped>
.video-player {
  width: 100%;
  height: 100%;
}
</style>
