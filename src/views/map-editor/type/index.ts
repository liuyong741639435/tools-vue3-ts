// 格子有哪些状态
export enum CellState {
    // 原始状态
    original = '0',
    // 障碍物
    obstacle = '1',
    // 可移动
    portability = '2'
}

// 状态对应的颜色
export const CellStateColor = {
    [CellState.original]: '',
    [CellState.obstacle]: '#000',
    [CellState.portability]: 'yellow',
}