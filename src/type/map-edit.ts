// 地图路径状态
export enum PathStatus {
    empty = '0', // 可通行
    obstacle = '1', // 障碍物
    passed = '2', // 走过的
    boundary = '3', // 边界
    start = '4', // 起点
    end = '5', // 终点
  }
  // 坐标
  export interface Coordinate {
    x: number;
    y: number;
  }
  
  export interface CoordinateObj extends Coordinate {
    pre?: CoordinateObj; // 从哪个坐标走到本坐标的
    cost: number; // 走到这里的代价
  }

  // 状态对应的颜色
export const CellStateColor = {
    [PathStatus.empty]: {
      color: 'yellow',
      title: '可移动',
      code: PathStatus.empty
    },
    [PathStatus.obstacle]: {
      color: 'black',
      title: '障碍物',
      code: PathStatus.obstacle
    },
    [PathStatus.passed]: {
      color: 'white',
      title: '寻路过',
      code: PathStatus.passed
    },
    [PathStatus.boundary]: {
      color: '#000',
      title: '边界',
      code: PathStatus.boundary
    },
    [PathStatus.start]: {
      color: '#0330f4',
      title: '起点',
      code: PathStatus.start
    },
    [PathStatus.end]: {
      color: '#6033aa',
      title: '终点',
      code: PathStatus.end
    },
}
