export function debounce(func, delay) {
    let timer;
    return function () {     //anonymous function
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}