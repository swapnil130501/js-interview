/**
 * Implement a function functionLength, to return the number of 
 * parameters a function expects. Note that this is a static value 
 * defined by the function, not the number of arguments the function 
 * is called with (which is determined by arguments.length
 * 
 *  Example:
    function foo() {}
    function bar(a) {}
    function baz(a, b) {}

    functionLength(foo); // 0
    functionLength(bar); // 1
    functionLength(baz); // 2
 */


function functionLength(cb) {
    return arguments.length
}

function foo() {}
function bar(a) {}
function baz(a, b) {}


console.log(functionLength(foo));
console.log(functionLength(bar));
console.log(functionLength(baz));

