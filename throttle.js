function throttle(cb, delay) {
    let last = 0; 

    return function (...args) {
        const now = Date.now();
        if (now - last < delay) {
            return; 
        }

        last = now;
        cb(...args);
    };
}


function throttle(cb, delay) {
    let last = 0;

    return function (...args) {
        const now = Date.now();
        if (now - last < delay) return;

        last = now;
        cb(...args);
    };
}

const fetchMoreData = () => {
    console.log("Fetching more data...");
    // Simulate fetching data
    setTimeout(() => {
        console.log("Data fetched!");
    }, 1000);
};

// Throttle the scroll event handler
const handleScroll = throttle(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // Check if the user is near the bottom of the page
    if (scrollTop + clientHeight >= scrollHeight - 10) {
        fetchMoreData();
    }
}, 200);

// Attach the throttled scroll handler
window.addEventListener("scroll", handleScroll);

