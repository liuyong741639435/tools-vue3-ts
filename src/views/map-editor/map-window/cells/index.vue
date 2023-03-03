<script setup lang="ts" name="MapCells">
import { CellState, CellStateColor } from "../../type";
import { useCells } from "./cells";

const { cells, cellSize } = useCells();
// 当前点击会把格子状态改成什么状态
const editCellState = CellState.obstacle
function tese(cell: any, index: number) {
    console.log(cell, index);
    cell.state = editCellState
    console.log('cell.state', cell.state);
}
CellStateColor
</script>

<template>
  <div class="MapCells">
    <div
      class="cell"
      v-for="(cell, index) of cells"
      :key="index"
      :style="`width: ${cellSize.width}px; height: ${cellSize.height}px; background-color: ${CellStateColor[cell.state]}`"
      :class="CellStateColor[cell.state]"
      @click="tese(cell, index)"
    />
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
