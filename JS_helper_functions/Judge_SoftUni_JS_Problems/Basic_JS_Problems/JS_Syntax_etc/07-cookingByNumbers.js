function solution(number, ...operations) {
    ops = {
        chop: (n) => n / 2,
        dice: (n) => Math.sqrt(n),
        spice: (n) => n + 1,
        bake: (n) => n * 3,
        fillet: (n) => n * 0.8
    }

    operations.forEach(element => {
        number = ops[element](number);
        console.log(number);
        return number;
    });

}

// solution('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// solution('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
