function solution(arr, sortOrder) {
    let sortedArrAsc = arr.slice().sort((a, b) => a - b);

    return sortOrder == 'asc' ? sortedArrAsc : sortedArrAsc.reverse();
}

// console.log(solution([14, 7, 17, 6, 8], 'asc'));
// console.log(solution([14, 7, 17, 6, 8], 'desc'));
// 