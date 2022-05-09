function add(num) {
    let sum = 0;

    function innerFunc(number) {
        sum += number;

        return innerFunc;
    }

    innerFunc.toString = () => {
        return sum;
    }

    return innerFunc(num);
}

// console.log(add(1));
// console.log(add(1).toString());
// console.log(add(1)(6)(-3));
// console.log(add(1)(6)(-3).toString());
// 