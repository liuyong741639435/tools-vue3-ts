<script setup lang="ts" name="MapWindow">
import MapImgs from './imgs/index.vue'
import MapCells from './cells/index.vue'
import { useMapEditorStore } from '../../../store/map-editor';
const mapEditorStore = useMapEditorStore()
</script>
<template>
  <div class="MapWindow" :style="`width:${mapEditorStore.imgsSize.width}px; height:${mapEditorStore.imgsSize.height}px`">
    <!-- 图片 -->
    <!-- <MapImgs /> -->
    <!-- 方格 -->
    <MapCells />
  </div>
</template>

<style lang="less" scoped>
.MapWindow {
  min-width: 900px;
  position: relative;
  min-height: 300px;
  margin: 0 auto 0;
}
</style>
