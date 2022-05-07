function solution(strings, rotations) {
    const realRotations = rotations % strings.length;
    const resultArr = strings;

    for (let index = 0; index < realRotations; index++) {
        resultArr.unshift(resultArr.pop());
    }

    console.log(resultArr.join(' '));
}

// solution(['1',
//     '2',
//     '3',
//     '4'],
//     2
// );
// solution(['Banana',
//     'Orange',
//     'Coconut',
//     'Apple'],
//     15
// );
