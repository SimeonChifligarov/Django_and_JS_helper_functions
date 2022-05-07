function solution(numbers) {
    // let biggestNumSoFar = Number.MIN_SAFE_INTEGER;
    // const resultArr = numbers.filter((num) => {
    //     if (num > biggestNumSoFar) {
    //         biggestNumSoFar = num;
    //         return true;
    //     }

    //     return false;
    // });

    if (numbers.length == 0) {
        return [];
    }


    let biggestNumSoFar = numbers[0];
    const resultArr = [biggestNumSoFar];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > biggestNumSoFar) {
            biggestNumSoFar = numbers[i];
            resultArr.push(biggestNumSoFar);
        }
    }

    return resultArr;
}

// console.log(solution([1,
//     3,
//     8,
//     4,
//     10,
//     12,
//     3,
//     2,
//     24]
// ));
// console.log(solution([1,
//     2,
//     3,
//     4]
// ));
// console.log(solution([20,
//     3,
//     2,
//     15,
//     6,
//     1]
// ));
// console.log(solution([]));
