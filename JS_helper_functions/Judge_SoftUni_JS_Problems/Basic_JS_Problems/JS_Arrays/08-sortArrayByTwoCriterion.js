function solution(strings) {
    const sortedStrings = strings
        .slice()
        .sort((a, b) => (a.length - b.length) || (a.localeCompare(b)));

    console.log(sortedStrings.join('\n'));
}

// solution([
//     'alpha',
//     'beta',
//     'gamma']
// );
// solution([
//     'Isacc',
//     'Theodor',
//     'Jack',
//     'Harrison',
//     'George']
// );
// solution([
//     'test',
//     'Deny',
//     'omen',
//     'Default']
// );
