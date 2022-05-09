function solve(...params) {
    let occurences = {};

    params.forEach(par => {
        let type = typeof par;
        console.log(`${type}: ${par}`);
        occurences[type] =
         occurences[type] === undefined 
         ? 1
         : ++occurences[type];
    });

    Object.keys(occurences)
    .sort((a,b) => occurences[b] - occurences[a])
    .forEach(key => console.log(`${key} = ${occurences[key]}`));

}

// solve('cat', 42, function () { console.log('Hello world!'); });
// 