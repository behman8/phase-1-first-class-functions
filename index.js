function receivesAFunction(callback) {
    console.log(callback());
}

function returnsANamedFunction() {
    const fn = () => {'Hello, World'}
    return fn;
}

function returnsAnAnonymousFunction() {
    return function () {
        'Returned Function'
    }
}