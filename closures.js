function Count(a) {
    this.test = function() {
        return a;
    }
}

const cnt = new Count(10);
console.log(cnt.test())