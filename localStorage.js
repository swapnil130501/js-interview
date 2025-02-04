function myLocalStorage() {
    function setItem(key, value, expiry) {
        const item = {
            value,
            expiry: expiry ? Date.now() + expiry * 1000 : null,
        }

        localStorage.setItem(key, JSON.stringify(item));
    }

    function getItem(key) {
        const data = localStorage.getItem(key);

        if(!data) {
            return null;
        }
        
        const item = JSON.parse(data);

        if(item.expiry && Date.now() > item.expiry) {
            localStorage.removeItem(key);
        }

        return item.value;
    }

    return {
        setItem,
        getItem
    }
}