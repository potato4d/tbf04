<template>
  <div class="the-cover" :class="{ 'is-dev': isDev }" />
</template>

<script>
export default {
  computed: {
    isDev() {
      return false
    }
  }
}
</script>

<style scoped>
.the-cover {
  width: 0;
  height: 4px;
  animation:
    slideToRight 0.8s ease-out forwards,
    slideToBottom 0.8s 1.3s ease-out forwards,
    backToHalf 0.7s 2.8s ease-out forwards;
  background: #4FC08D;
}

.the-cover.is-dev {
  animation:
    slideToRight 0s ease-out forwards,
    slideToBottom 0s 0s ease-out forwards,
    backToHalf 0s 0s ease-out forwards;
}

@keyframes slideToRight {
  0%{ width: 0; }
  100%{ width: 100vw; }
}

@keyframes slideToBottom {
  0% { height: 0; }
  100% { height: 100%; }
}
@keyframes backToHalf {
  0% { height: 100%; }
  100% { height: calc(100% - 200px); }
}
</style>
