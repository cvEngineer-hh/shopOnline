// 计算时间
export function Time(time) {
    let nowTime = +new Date();
    let times = nowTime / 1000 - time;
    return {
        y: parseInt(times / 60 / 60 / 24 / 30 % 12),
        m: parseInt(times / 60 / 60 / 24 % 30),
        d: parseInt(times / 60 / 60 % 24),
        h: parseInt(times / 60 % 60),
    }
}