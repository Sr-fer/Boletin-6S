function datos(limit) {
    var limit = 20
    var fib = [0, 1];
    for (let i = 2; i < limit; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib
}
