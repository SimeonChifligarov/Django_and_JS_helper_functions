const { expect } = require('chai');

describe("Tests for library.js …", function () {
    describe("findBook func", function () {
        it("expect to throw when book lenght is 0", function () {
            expect(() => library.findBook([], 'my book1')).to.throw(Error, "No books currently available");
        });
        it("expect to find the book when available", function () {
            expect(library.findBook(['my book1'], 'my book1')).to.equal("We found the book you want.");
            expect(library.findBook(['my book1', 'abc', 'deee', 'maimun'], 'my book1')).to.equal("We found the book you want.");
            expect(library.findBook(['abc', 'deee', 'maimun', 'my book1'], 'my book1')).to.equal("We found the book you want.");
        });
    });
    describe("calcPriceOfBook func", function () {
        it("validate input wrong year", function () {
            expect(() => library.calcPriceOfBook('a book', '1999')).to.throw(Error, "Invalid input");
            expect(() => library.calcPriceOfBook('a book', undefined)).to.throw(Error, "Invalid input");
            expect(() => library.calcPriceOfBook('a book', 1995.5)).to.throw(Error, "Invalid input");
        });
    });
});
