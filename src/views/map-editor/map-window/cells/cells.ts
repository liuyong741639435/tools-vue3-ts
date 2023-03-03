import { ref } from "vue";
import { useMapEditorStore } from "../../../../store/map-editor";
import { CellState } from "../../type";

function getCells(x: number, y: number, state: CellState) {
    const cells: { x: number; y: number; state: CellState }[] = []
    for( let currX = 0; currX < x; currX++) {
        for(let currY = 0; currY < y; currY++ ) {
            cells.push({
                x: currX,
                y: currY,
                state // todo 后续用枚举
            })
        }
    }
    return cells
}

export function useCells() {
    const mapEditor = useMapEditorStore()
    // 取文件宽高
    const { width, height } = mapEditor.$state.imgsSize

    // 读取x轴和y轴格子数量
    const cellsNumber = {
        x: 9,
        y: 6
    }
    
    // 获得格子参数 格子默认为可以移动
    const cells = ref(getCells(cellsNumber.x, cellsNumber.y, CellState.portability))
    // 格子大小
    const cellSize = {
        width: width / cellsNumber.x,
        height: height / cellsNumber.y
    }

    return {
        cells,
        cellSize
    }
}