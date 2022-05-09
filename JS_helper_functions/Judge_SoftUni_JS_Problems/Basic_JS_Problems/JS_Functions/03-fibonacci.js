function getFibonator() {
    let currentNum = 0;
    let tempNum = 1;

    function getNumber() {
        let nextNum = currentNum + tempNum;
        currentNum = tempNum;
        tempNum = nextNum;

        return currentNum;
    }

    return getNumber;
}

// let fib = getFibonator();
// console.log(fib()); // 1
// console.log(fib()); // 1
// console.log(fib()); // 2
// console.log(fib()); // 3
// console.log(fib()); // 5
// console.log(fib()); // 8
// console.log(fib()); // 13
// 