function receivesAFunction(callback) {
    callback();
}

const returnsANamedFunction = function() {
    return function named() {
        return "yo";
    }
}

function returnsAnAnonymousFunction() {
    let anon;
    return anon => "yo"
};