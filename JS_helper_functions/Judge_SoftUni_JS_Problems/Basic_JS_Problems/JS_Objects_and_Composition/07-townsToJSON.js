function solution(inputAsArr) {
    let inputAsArrCopy = inputAsArr.slice();
    
    let titles = serializeRow(inputAsArrCopy.shift());

    let rows = inputAsArrCopy
        .map(row => serializeRow(row)
            .reduce((acc, el, i) => {
                acc[titles[i]] = el;
                return acc;
            }, {}));

    return JSON.stringify(rows);


    function serializeRow(string) {
        return string
            .split('|')
            .map(el => el.trim())
            .filter(el => el !== '')
            .map(el => isNaN(Number(el)) ? el : Number(Number(el).toFixed(2)));
    }

}

// console.log(solution([
//     '| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |']
// ));
// console.log(solution([
//     '| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |']
// ));
// 