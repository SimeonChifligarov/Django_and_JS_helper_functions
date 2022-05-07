function solution(matrix) {
    let isMagicRows = true;
    let isMagicCols = true;
    let currentSum = 0;
    let firstSum = matrix[0].reduce((acc, curr) => acc + curr);

    if (matrix.lenght == 1) {
        return false;
    }

    for (let i = 1; i < matrix.length; i++) {
        currentSum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            currentSum += matrix[i][j];
        }
        if (currentSum != firstSum) {
            isMagicRows = false;
            break;
        }
    }

    for (let i = 0; i < matrix[0].length; i++) {
        currentSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            currentSum += matrix[j][i];
        }
        if (currentSum != firstSum) {
            isMagicCols = false;
            break;
        }
    }

    return isMagicRows && isMagicCols;
}


// console.log(solution(
//     [[4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]]
// ));
// console.log(solution(
//     [[11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]
// ));
// console.log(solution(
//     [[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]
// ));
