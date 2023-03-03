<script setup lang="ts" name="MapImgs">
import { useMapEditorStore } from '../../../../store/map-editor';

const mapEditor = useMapEditorStore()
</script>

<template>
    <div class="imgs">
        <img src="@/assets/map/@@@@集市.jpg" alt="" :width="mapEditor.imgsSize.width" :height="mapEditor.imgsSize.height">
    </div>
</template>

<style lang="less" scoped>
.MapImgs {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.9;
    img {
        width: 100%;
    }
}
</style>
