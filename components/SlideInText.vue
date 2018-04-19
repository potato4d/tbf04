<template>
  <div class="slidein">
    <div class="slidein-content" :style="contentAnimation">
      <slot></slot>
    </div>
    <div class="slidein-cover" :style="coverAnimation" />
  </div>
</template>

<script>
export default {
  props: {
    time: {
      default: 0.6
    },
    fontSize: {
      default: 30
    },
    offset: {
      default: 0.5
    }
  },
  computed: {
    contentAnimation() {
      const fontSize = `${this.fontSize}px`
      const animation = `slidein-text 0s ${(+this.offset)+this.time}s forwards`
      return { animation, fontSize }
    },
    coverAnimation() {
      const animation = `slidein-cover1 ${this.time}s ${this.offset}s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards, slidein-cover2 ${this.time-0.1}s ${(+this.offset)+this.time-0.1}s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards`
      return { animation }
    }
  }
}
</script>

<style>
@keyframes slidein-text {
  0% { opacity: 0.0; }
  100% { opacity: 0.0; }
  100% { opacity: 1.0; }
}

@keyframes slidein-cover1 {
  0%{ width: 0; }
  100% { width: 100%; }
}

@keyframes slidein-cover2 {
  0%{ transform: translateX(0); }
  100% { transform: translateX(100%); }
}
</style>

<style scoped>
.slidein {
  display: inline-block;
  padding: 12px 16px;
  position: relative;
  font-size: 30px;
  overflow: hidden;
  letter-spacing: 1.4;
  line-height: 1.6;
}

.slidein-content {
  opacity: 0.0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "A-OTF UD Shin Maru Go Pr6N";
}

.slidein-cover {
  width: 0;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
}
</style>
