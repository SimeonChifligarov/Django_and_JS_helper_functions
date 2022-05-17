const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function (booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};

const { expect } = require('chai');

describe("Tests for library.js …", function () {
    describe("calcPriceOfBook func", function () {
        it("validate input wrong year", function () {
            expect(() => library.calcPriceOfBook('a book', '1999')).to.throw(Error, "Invalid input");
            expect(() => library.calcPriceOfBook('a book', undefined)).to.throw(Error, "Invalid input");
            expect(() => library.calcPriceOfBook('a book', 1995.5)).to.throw(Error, "Invalid input");
        });
        it("validate input wrong nameOfBook", function () {
            expect(() => library.calcPriceOfBook(12, 1995)).to.throw(Error, "Invalid input");
            expect(() => library.calcPriceOfBook([], 1995)).to.throw(Error, "Invalid input");
            expect(() => library.calcPriceOfBook(null, 1995)).to.throw(Error, "Invalid input");
            expect(() => library.calcPriceOfBook(12.2, 1995)).to.throw(Error, "Invalid input");
            expect(() => library.calcPriceOfBook({}, 1995)).to.throw(Error, "Invalid input");
        });
        it("validate input wrong both args", function () {
            expect(() => library.calcPriceOfBook(12, '1999')).to.throw(Error, "Invalid input");
            expect(() => library.calcPriceOfBook([], [])).to.throw(Error, "Invalid input");
            expect(() => library.calcPriceOfBook(null, undefined)).to.throw(Error, "Invalid input");
        });
        it("return correct price when year > 1980", function () {
            expect(library.calcPriceOfBook('12', 2002)).to.equal(`Price of 12 is 20.00`);
            expect(library.calcPriceOfBook('abc book', 2012)).to.equal(`Price of abc book is 20.00`);
        });
        it("return correct price (with bonus) when year <= 1980", function () {
            expect(library.calcPriceOfBook('12', 1980)).to.equal(`Price of 12 is 10.00`);
            expect(library.calcPriceOfBook('abc book', 1955)).to.equal(`Price of abc book is 10.00`);
        });
    });

    describe("findBook func", function () {
        it("expect to throw when book lenght is 0", function () {
            expect(() => library.findBook([], 'my book1')).to.throw(Error, "No books currently available");
        });
        it("expect to find the book when available", function () {
            expect(library.findBook(['my book1'], 'my book1')).to.equal("We found the book you want.");
            expect(library.findBook(['my book1', 'abc', 'deee', 'maimun'], 'my book1')).to.equal("We found the book you want.");
            expect(library.findBook(['abc', 'deee', 'maimun', 'my book1'], 'my book1')).to.equal("We found the book you want.");
        });
        it("expect not to find the book when not available", function () {
            expect(library.findBook(['my book1'], 'my book2')).to.equal("The book you are looking for is not here!");
            expect(library.findBook(['my book1', 'abc', 'deee', 'maimun'], 'my book2')).to.equal("The book you are looking for is not here!");
            expect(library.findBook(['abc', 'deee', 'maimun', 'my book1'], 'my book2')).to.equal("The book you are looking for is not here!");
            expect(library.findBook(['aszzzzz'], 'my book2')).to.equal("The book you are looking for is not here!");
        });
    });
    describe("arrangeTheBooks func", function () {
        it("expect to throw when count is not an integer", function () {
            expect(() => library.arrangeTheBooks('')).to.throw(Error, "Invalid input");
            expect(() => library.arrangeTheBooks('12')).to.throw(Error, "Invalid input");
            expect(() => library.arrangeTheBooks(undefined)).to.throw(Error, "Invalid input");
            expect(() => library.arrangeTheBooks(12.3)).to.throw(Error, "Invalid input");
            expect(() => library.arrangeTheBooks(-1)).to.throw(Error, "Invalid input");
            expect(() => library.arrangeTheBooks(-22.5)).to.throw(Error, "Invalid input");
        });
        it("expect to arrange when available space (5*8=40) > counts ", function () {
            expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(2)).to.equal("Great job, the books are arranged.");            
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");            
        });
        it("expect to not arrange when available space (5*8=40) < counts", function () {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
            expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.");
            expect(library.arrangeTheBooks(12221)).to.equal("Insufficient space, more shelves need to be purchased.");            
        });
    });
});


