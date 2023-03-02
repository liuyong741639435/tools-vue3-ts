// 地图路径状态
export var PathStatus;
(function (PathStatus) {
    PathStatus[PathStatus["empty"] = 0] = "empty";
    PathStatus[PathStatus["obstacle"] = 1] = "obstacle";
    PathStatus[PathStatus["passed"] = 2] = "passed";
    PathStatus[PathStatus["boundary"] = 3] = "boundary";
})(PathStatus || (PathStatus = {}));
// 计算2个点之间的距离
function calculateDistance(c1, c2 = { x: 0, y: 0 }) {
    return Math.sqrt((c1.x - c2.x) ** 2 + (c1.y - c2.y) ** 2);
}
export default class Astart {
    constructor(mapGrid) {
        this.mapGrid = mapGrid;
    }
    getGridState(coordinate) {
        var _a, _b;
        // 坐标为从左到右是X轴大到小，上到下为Y轴大到小
        return (_b = (_a = this.mapGrid[coordinate.y]) === null || _a === void 0 ? void 0 : _a[coordinate.x]) !== null && _b !== void 0 ? _b : PathStatus.boundary;
    }
    //   找路径
    nav(start, end) {
        var _a;
        // 2种情况，先只实现一种。
        // 情况1 起始和终点都是要可行的
        if (this.getGridState(start) === PathStatus.obstacle) {
            return {
                code: -1,
                msg: "起点与障碍物重合",
            };
        }
        if (this.getGridState(end) === PathStatus.obstacle) {
            return {
                code: -1,
                msg: "终点与障碍物重合",
            };
        }
        // 开始寻路
        // 1 创建数组，存储待探索的路径
        const queue = [
            Object.assign(Object.assign({}, start), { cost: 0 }),
        ];
        // 2 创建一个table存储走过的路径
        const tables = {};
        // 3 创建一个obj存储当前走到的节点
        let currCoordinate;
        // 添加到队列的操作方法
        const addQueue = (coordinate) => {
            // 输入的坐标可以移动，并且没被寻路过
            const key = `${coordinate.x}|${coordinate.y}`; // 后续取关键xy也可以截取
            if (this.getGridState(coordinate) === PathStatus.empty && !tables[key]) {
                queue.push(coordinate);
                tables[key] = true; // 在tables中标记一下某个点已经被走过了
            }
        };
        // 循环操作
        while (true) {
            if (queue.length === 0) {
                return {
                    code: -1,
                    msg: "没有可行进路线",
                };
            }
            // 按规则找一个优先的点，先找到下标
            let maxindex = 0;
            let maxValue = calculateDistance(queue[0], end);
            queue.forEach((item, index) => {
                let temp = calculateDistance(item, end);
                if (temp > maxValue) {
                    maxValue = temp;
                    maxindex = index;
                }
            });
            // 从队列中取出
            currCoordinate = Object.assign({}, queue.splice(maxindex, 1)[0]);
            // 判断是否已经到终点
            if (currCoordinate.x === end.x && currCoordinate.y === end.y) {
                const data = [currCoordinate];
                while (true) {
                    const temp = (_a = data[data.length - 1]) === null || _a === void 0 ? void 0 : _a.pre;
                    if (temp) {
                        data.push(temp);
                    }
                    else {
                        break;
                    }
                }
                return {
                    code: 0,
                    msg: "已经找到最优路线",
                    data: data.map(({ x, y }) => ({ x, y })).reverse(), // 最优路线
                };
            }
            // 当前点找8个方向
            addQueue({
                x: currCoordinate.x - 1,
                y: currCoordinate.y - 1,
                cost: currCoordinate.cost + calculateDistance({ x: -1, y: -1 }),
                pre: currCoordinate,
            });
            addQueue({
                x: currCoordinate.x - 1,
                y: currCoordinate.y,
                cost: currCoordinate.cost + calculateDistance({ x: -1, y: 0 }),
                pre: currCoordinate,
            });
            addQueue({
                x: currCoordinate.x - 1,
                y: currCoordinate.y + 1,
                cost: currCoordinate.cost + calculateDistance({ x: -1, y: 1 }),
                pre: currCoordinate,
            });
            addQueue({
                x: currCoordinate.x + 1,
                y: currCoordinate.y - 1,
                cost: currCoordinate.cost + calculateDistance({ x: 1, y: -1 }),
                pre: currCoordinate,
            });
            addQueue({
                x: currCoordinate.x + 1,
                y: currCoordinate.y,
                cost: currCoordinate.cost + calculateDistance({ x: 1, y: 0 }),
                pre: currCoordinate,
            });
            addQueue({
                x: currCoordinate.x + 1,
                y: currCoordinate.y + 1,
                cost: currCoordinate.cost + calculateDistance({ x: 1, y: 1 }),
                pre: currCoordinate,
            });
            addQueue({
                x: currCoordinate.x,
                y: currCoordinate.y - 1,
                cost: currCoordinate.cost + calculateDistance({ x: 0, y: -1 }),
                pre: currCoordinate,
            });
            addQueue({
                x: currCoordinate.x,
                y: currCoordinate.y + 1,
                cost: currCoordinate.cost + calculateDistance({ x: 0, y: 1 }),
                pre: currCoordinate,
            });
        }
        // 情况2 起始必须可行， 终点不可行，走到最近的位置即可
    }
}
const aStart = new Astart([
    [0, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0],
]);
console.log("aStart", aStart.nav({ x: 0, y: 0 }, { x: 3, y: 3 }));
