// 防抖节流
export function debounce(fun, delay) {
    let timer = null;
    return function () {
        // 当 timer 定时器内还有内容时（没有运行完），将 timer 的定时器取消并重新添加定时器
        if (timer != null) clearTimeout(timer);
        timer = setTimeout(() => {
            fun;
        }, delay)
    }
}