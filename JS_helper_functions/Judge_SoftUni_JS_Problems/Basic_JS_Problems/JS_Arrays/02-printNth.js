function solution(strings, step) {
    const resultArr = [];

    for (let index = 0; index < strings.length; index += step) {
        resultArr.push(strings[index]);
    }

    return resultArr;
}

// console.log(solution([
//     '5',
//     '20',
//     '31',
//     '4',
//     '20'],
//     2
// ));

// console.log(solution([
//     'dsa',
//     'asd',
//     'test',
//     'tset'],
//     2
// ));

// console.log(solution([
//     '1',
//     '2',
//     '3',
//     '4',
//     '5'],
//     6
// ));
