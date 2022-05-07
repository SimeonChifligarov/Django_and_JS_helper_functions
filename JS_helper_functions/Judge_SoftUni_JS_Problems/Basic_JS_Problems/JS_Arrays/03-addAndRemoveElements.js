function solution(commands) {
    const resultArr = [];

    commands.forEach((element, index) => element == 'add' ? resultArr.push(index + 1) : resultArr.pop());

    resultArr.length == 0 ? console.log('Empty') : console.log(resultArr.join('\n'));
}

// solution([
//     'add',
//     'add',
//     'add',
//     'add']
// );
// solution([
//     'add',
//     'add',
//     'remove',
//     'add',
//     'add']
// );
// solution([
//     'remove',
//     'remove',
//     'remove']
// );
