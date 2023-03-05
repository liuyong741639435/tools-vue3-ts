import { reactive, Ref, ref } from "vue";
import { useMapEditorStore } from "../../../../store/map-editor";
import Astart from "../../../../tools/astart";
import { PathStatus } from "../../../../type/map-edit";

function getCells(x: number, y: number) {
    const cells: PathStatus[][] = []
    for (let currX = 0; currX < x; currX++) {
        let temp: PathStatus[] = []
        for (let currY = 0; currY < y; currY++) {
            temp.push(PathStatus.empty)
        }
        cells.push(temp)
    }
    return cells
}

export const cells: Ref<PathStatus[][]> = ref([])
export const cellSize = reactive({
    width: 10,
    height: 10
})

// 当前点击会把格子状态改成什么状态
export const editCellState = ref(PathStatus.obstacle)

export function updateCells(cellsNumber: {
    x: number;
    y: number;
}) {
    const mapEditor = useMapEditorStore()
    const { width, height } = mapEditor.$state.imgsSize
    cells.value = getCells(cellsNumber.x, cellsNumber.y)
    // 格子大小
    cellSize.width = width / cellsNumber.x,
        cellSize.height = height / cellsNumber.y
}

export function changeEditCellState(pathStatus: PathStatus) {
    editCellState.value = pathStatus
}

// 生成地图
export function generateMap() {
    console.log('cells:', cells.value)
}

// 导航
export function mapNav() {
    const astart = new Astart(cells.value)
    const nav = astart.nav({ x: 0, y: 0 }, { x: 5, y: 8 })
    console.log('nav:', nav);
    if (nav.data) {
        updateWindow(nav.data)
    }
}

// 显示导航记录
export function updateWindow(data: {
    x: number;
    y: number;
}[]) {
    data.forEach(({x, y}) => {
        cells.value[y][x] = PathStatus.passed
    })
}

// 设置格子的状态
const start = ref<{x: number; y:number} | null>(null)
const end = ref<{x: number; y:number} | null>(null)

function changeCellState(row: any, index: number) {
  // 设置起点和终点，都需要先清除之前的起点或者终点
  if (editCellState.value === PathStatus.start) {

  } else if (editCellState.value === PathStatus.end) {

  } else {
    row[index] = editCellState.value
  }
    
}
