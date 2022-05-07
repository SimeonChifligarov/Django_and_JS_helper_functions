function solution(numbers) {
    const resultArr = [];
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);

    // let action = 'smallest';

    while (sortedNumbers.length > 0) {
        // if (action == 'smallest') {
        //     resultArr.push(sortedNumbers.shift());
        //     action = 'largest';
        // } else if (action == 'largest') {
        //     resultArr.push(sortedNumbers.pop());
        //     action = 'smallest';
        // }
        resultArr.push(sortedNumbers.shift());
        if (sortedNumbers.length > 0) {
            resultArr.push(sortedNumbers.pop());
        }

    }

    return resultArr;
}

// console.log(solution([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
