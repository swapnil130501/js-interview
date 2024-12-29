function debounce(cb, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            cb(...args);
        }, delay);
    };
}

function print(data) {
    console.log(data)
}

let debouncedPrint = debounce(print, 1000);

debouncedPrint("i");
debouncedPrint("ip");
debouncedPrint("iph");
debouncedPrint("ipho");
debouncedPrint("iphon");
debouncedPrint("iphone");
