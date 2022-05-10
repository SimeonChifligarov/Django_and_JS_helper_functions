// const assert = require('chai').assert;

// function isOddOrEven(string) {
//     if (typeof(string) !== 'string') {
//         return undefined;
//     }
//     if (string.length % 2 === 0) {
//         return "even";
//     }

//     return "odd";
// }

 
describe('isOddOrEven functionallity test', () =>{
    it('Should return *undefined* if passed argument is not a string', () =>{
        assert.strictEqual(isOddOrEven(22), undefined);
        assert.strictEqual(isOddOrEven(3.14), undefined);
        assert.strictEqual(isOddOrEven([2, 'kaka']), undefined);
        assert.strictEqual(isOddOrEven(['bate', 'kaka', 'pee', 'v', 'ski']), undefined);
        assert.strictEqual(isOddOrEven({}), undefined);
        assert.strictEqual(isOddOrEven(null), undefined);
        assert.strictEqual(isOddOrEven(undefined), undefined);
    })

    it('Should return "even" if passed argument is valid string with EVEN LENGTH', () =>{
        assert.strictEqual(isOddOrEven('ud'), "even");
        assert.strictEqual(isOddOrEven('udri bate udri'), "even");
        assert.strictEqual(isOddOrEven('udri bate udriii'), "even");
    })

    it('Should return "even" if passed argument is empty string', () =>{
        assert.strictEqual(isOddOrEven(''), "even");
    })

    it('Should return "odd" if passed argument is valid string with ODD LENGTH', () =>{
        assert.strictEqual(isOddOrEven('udrii'), "odd");
        assert.strictEqual(isOddOrEven('udri bate udrii'), "odd");
        assert.strictEqual(isOddOrEven('udri bate udriiiiii'), "odd");
    })

    it('Should return *correct answer* /"even" or "odd"/ if passed argument is valid string with MIXED LENGTH', () =>{
        assert.strictEqual(isOddOrEven('udrii'), "odd");
        assert.strictEqual(isOddOrEven('udri bate udri'), "even");
        assert.strictEqual(isOddOrEven('udri bate udriiiiii'), "odd");
        assert.strictEqual(isOddOrEven('udri bate udriiiiiii'), "even");
    })

})
