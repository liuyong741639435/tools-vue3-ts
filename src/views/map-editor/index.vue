<script setup lang="ts">
import MapWindow from './map-window/index.vue'
import MapController from './map-controller/index.vue'
</script>

<template>
  <div class="editor">
    <!-- 头部控制组件 -->

    <!-- 窗口 -->
    <MapWindow />
    <!-- 右侧控制组件 -->
    <MapController />
  </div>
</template>

<style scoped>
.editor {
  position: relative;
}
</style>
