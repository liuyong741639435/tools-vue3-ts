<script setup lang="ts" name="MapCells">
import { ref } from "vue";
import { CellStateColor, PathStatus } from "../../../../type/map-edit";
import { cells, cellSize, editCellState } from "./cells";

</script>

<template>
  <div class="MapCells">
    <div class="row"
      v-for="(row, rowIndex) of cells"
      :key="rowIndex"
      >
      <div class="cell" v-for="(cell, cellIndex) of row"
      :key="cellIndex" :style="`width: ${cellSize.width}px; height: ${cellSize.height}px; background-color: ${CellStateColor[cell]?.color}`"
      :class="CellStateColor[cell]"
      @click="changeCellState(row, cellIndex)">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.MapCells {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-flow: row wrap;

  .cell {
    color: red;
    border: 1px solid red;
    box-sizing: border-box;
  }
}
</style>
