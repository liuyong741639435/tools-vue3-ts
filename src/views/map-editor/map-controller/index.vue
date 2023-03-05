<script setup lang="ts" name="MapController">
import { CellStateColor } from '../../../type/map-edit';
import { changeEditCellState, generateMap, mapNav } from '../map-window/cells/cells';
import { formState, changeGrid } from './map-controller'

</script>

<template>
  <div class="map-controller">
    <a-form :model="formState" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
    <a-form-item label="网格大小">
      <a-input-number :min="1" :max="100000" v-model:value="formState.x" />
      <a-input-number :min="1" :max="100000" v-model:value="formState.y" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="changeGrid">更新网格</a-button>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="changeEditCellState(CellStateColor[0].code)">{{ CellStateColor[0].title }}</a-button>
      <span class="colorContainer" :style="`background-color: ${CellStateColor[0].color}`"></span>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="changeEditCellState(CellStateColor[1].code)">{{ CellStateColor[1].title }}</a-button>
      <span class="colorContainer" :style="`background-color: ${CellStateColor[1].color}`"></span>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary">格子反选</a-button>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="generateMap" >生成地图</a-button>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="changeEditCellState(CellStateColor[4].code)">设置起点</a-button>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="changeEditCellState(CellStateColor[5].code)">设置终点</a-button>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="mapNav">开始寻路</a-button>
    </a-form-item>
  </a-form>
  </div>
</template>

<style lang="less" scoped>
.map-controller {
  position: absolute;
  right: 0;
  top: 0;
  width: 400px;
  height: 100vh;
  border: 1px solid #eaeaea;
  padding: 20px 10px;
  .colorContainer {
    width: 30px;
    height: 32px;
    margin-left: 10px;
    display: inline-block;
    vertical-align: bottom;
  }
}
</style>
