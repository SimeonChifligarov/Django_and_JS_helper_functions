function solution(juicesInfo) {
    let juicesAmount = new Map();
    let juicesBottles = new Map();

    for (const juice of juicesInfo) {
        let [juiceName, amouth] = juice.split(' => ');
        amouth = Number(amouth);

        if (!juicesAmount.has(juiceName)) {
            juicesAmount.set(juiceName, 0);
        }

        let total = juicesAmount.get(juiceName) + amouth;

        if (total >= 1000) {
            if (!juicesBottles.has(juiceName)) {
                juicesBottles.set(juiceName, 0);
            }

            let newBottles = Math.trunc(total / 1000);
            let totalBottles = juicesBottles.get(juiceName) + newBottles;
            juicesBottles.set(juiceName, totalBottles);
        }

        juicesAmount.set(juiceName, total % 1000);

    }

    juicesBottles.forEach((val, key) => console.log(`${key} => ${val}`));
}

// solution([
//     'Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']
// );
// solution([
//     'Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789']
// );
// 