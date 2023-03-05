import { reactive } from "vue";
import Astart from "../../../tools/astart";
import { updateCells } from "../map-window/cells/cells";

export const formState = reactive({
  x: 9,
  y: 6,
});

// 更新网格
export function changeGrid() {
  updateCells(formState);
}

