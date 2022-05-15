const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};


const { expect } = require('chai');

describe("Tests for testNumbers.js …", function () {
    describe("sumNumbers func", function () {
        it("Should return correct result with valid argumets", function () {
            expect(testNumbers.sumNumbers(3, 4)).to.equal('7.00');
            expect(testNumbers.sumNumbers(0, 4)).to.equal('4.00');
            expect(testNumbers.sumNumbers(-3, 4)).to.equal('1.00');
            expect(testNumbers.sumNumbers(-1, 1)).to.equal('0.00');
            expect(testNumbers.sumNumbers(-1.14, 1.14)).to.equal('0.00');
            expect(testNumbers.sumNumbers(-11.5, 1.4)).to.equal('-10.10');
        });
        it("Should return 'undefined' with invalid argumets", function () {
            expect(testNumbers.sumNumbers('3', 4)).to.be.undefined;
            expect(testNumbers.sumNumbers(3, 'abc')).to.be.undefined;
            expect(testNumbers.sumNumbers({}, null)).to.be.undefined;
            expect(testNumbers.sumNumbers('3', '2.1')).to.be.undefined;
        });
    });

    describe("numberChecker func", function () {
        it("Should throw with invalid argumet", function () {
            expect(() => testNumbers.numberChecker('abc')).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker('34abc')).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker('ab3.1c')).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker('ab3.1c')).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker([1, 2, 3])).to.throw(Error, 'The input is not a number!');
            // expect(() => testNumbers.numberChecker(null)).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker(undefined)).to.throw(Error, 'The input is not a number!');

        });
        it("Should return 'even' with invalid even argumet", function () {
            expect(testNumbers.numberChecker(4)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(556)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(-12)).to.equal('The number is even!');
        });
        it("Should return 'odd' with invalid even argumet", function () {
            expect(testNumbers.numberChecker(3)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(5555)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(-11)).to.equal('The number is odd!');
        });
    });
    describe("averageSumArray func", function () {
        it("Should return correct result with valid arr argumet", function () {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
            expect(testNumbers.averageSumArray([-1, 0, 1])).to.equal(0);
            expect(testNumbers.averageSumArray([-10, -100, 110, 400])).to.equal(100);
            expect(testNumbers.averageSumArray([-1000, 0])).to.equal(-500);
        });
        
    });

});



