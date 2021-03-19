

function receivesAFunction(callback) {
    callback();
}



function returnsANamedFunction() {
    function newFunc() {
        return 1 + 1;
    }
    return newFunc;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Hello")
    }
}



