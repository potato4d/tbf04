<template>
  <img class="the-girl" src="~/assets/images/cute_girl.png" alt="Nuxt tech book girl" :class="{ 'is-dev': isDev }" />
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
.the-girl {
  width: 740px;
  position: absolute;
  right: 0;
  bottom: -300px;
  opacity: 0.0001;
  animation:
    fadeInUp 0.8s 5.3s ease-out forwards;
}

.the-girl.is-dev {
  animation:
    fadeInUp 0s 0s ease-out forwards;
}

@keyframes fadeInUp {
  0% { opacity: 0.0; transform: translateY(40px); }
  100% { opacity: 1.0; transform: translateY(0); }
}
</style>
