// 传入宽高 得出建议的格子的宽高
export function recommendedSize(width: number, height: number) {
    // 1 从最大值开始找公共的除数
    const maxNumber = width > height ? width : height
    const resNumber: number[] = []
    for (let divisor = maxNumber; divisor > 0; divisor--) {
        if (width % divisor === 0 && height % divisor === 0) {
            resNumber.push(divisor)
        }
    }
    return resNumber // 返回值从大到小
}