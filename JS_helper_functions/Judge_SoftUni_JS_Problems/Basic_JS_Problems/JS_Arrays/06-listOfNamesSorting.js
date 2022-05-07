function solution(names) {
    const sortedNames = names.slice();
    sortedNames
        .sort((a, b) => a.localeCompare(b))
        .forEach((name, index) => console.log(`${index + 1}.${name}`));
}

// solution(["John", "Bob", "Christina", "Ema"]);
