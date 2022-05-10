// let {expect} = require('chai');


// let mathEnforcer = {
//     addFive: function (num) {
//         if (typeof(num) !== 'number') {
//             return undefined;
//         }
//         return num + 5;
//     },
//     subtractTen: function (num) {
//         if (typeof(num) !== 'number') {
//             return undefined;
//         }
//         return num - 10;
//     },
//     sum: function (num1, num2) {
//         if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
//             return undefined;
//         }
//         return num1 + num2;
//     }
// };


describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('Should return *undefined* when parameter is not a number', () => {
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
            expect(mathEnforcer.addFive([])).to.equal(undefined);
            expect(mathEnforcer.addFive({})).to.equal(undefined);
            expect(mathEnforcer.addFive('-3.14')).to.equal(undefined);
            expect(mathEnforcer.addFive(555n)).to.equal(undefined);
            expect(mathEnforcer.addFive('100')).to.equal(undefined);
        })
 
        it('Should return *{number plus 5}* when parameter is number', () => {
            expect(mathEnforcer.addFive(10)).to.equal(15);
            expect(mathEnforcer.addFive(1.1 + 2.2)).to.closeTo(8.3, 0.01);
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        })
    })
 
    describe('subtractTen', () => {
        it('Should return *undefined* when parameter is not a number', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
            expect(mathEnforcer.subtractTen([])).to.equal(undefined);
            expect(mathEnforcer.subtractTen({})).to.equal(undefined);
            expect(mathEnforcer.subtractTen('-3.14')).to.equal(undefined);
            expect(mathEnforcer.subtractTen(555n)).to.equal(undefined);
            expect(mathEnforcer.subtractTen('100')).to.equal(undefined);
        })
 
        it('Should return *{number minus 10}* when parameter is number', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(100)).to.equal(90);
            expect(mathEnforcer.subtractTen(1.1 + 2.2)).to.closeTo(-6.7, 0.01);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        })
    })
 
    describe('sum', () => {
        it('Should return *undefined* when first parameter is not a number', () => {
            expect(mathEnforcer.sum(undefined, 1)).to.equal(undefined);
            expect(mathEnforcer.sum(null, 1)).to.equal(undefined);
            expect(mathEnforcer.sum('13', 1)).to.equal(undefined);
        })
 
        it('Should return *undefined* when second parameter is not a number', () => {
            expect(mathEnforcer.sum(1, undefined)).to.equal(undefined);
            expect(mathEnforcer.sum(1, null)).to.equal(undefined);
            expect(mathEnforcer.sum(1, '13')).to.equal(undefined);
        })

        it('Should return *undefined* when both parameters are not numbers', () => {
            expect(mathEnforcer.sum(null, undefined)).to.equal(undefined);
            expect(mathEnforcer.sum([], null)).to.equal(undefined);
            expect(mathEnforcer.sum({}, '13')).to.equal(undefined);
        })
 
 
        it('Should return the *{sum of both numbers}* when both parameters are valid numbers', () => {
            expect(mathEnforcer.sum(10, 20)).to.equal(30);
            expect(mathEnforcer.sum(1.1 + 2.2, 3.3)).to.closeTo(6.6, 0.01);
            expect(mathEnforcer.sum(-10, -5)).to.equal(-15);
            expect(mathEnforcer.sum(-10, 50)).to.equal(40);

        })
    })
})
