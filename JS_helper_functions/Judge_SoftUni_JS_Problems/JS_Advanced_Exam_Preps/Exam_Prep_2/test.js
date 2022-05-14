const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function (projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {

        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 || firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};


const { expect } = require('chai');


describe("Tests for cinema.js …", function () {
    describe("showMovies func …", function () {
        it("Should return correct message when array input is empty …", function () {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it("Should return correct array join message when array input is valid …", function () {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        });
        it("Should return correct array join message when array input with length 1 …", function () {
            expect(cinema.showMovies(['King Kong'])).to.equal('King Kong');
        });
    });
    describe("ticketPrice func …", function () {
        it("Should throw errow when incorrect projectionType is given …", function () {
            expect(() => cinema.ticketPrice('')).to.throw(Error, 'Invalid projection type.');
            expect(() => cinema.ticketPrice('neshto si')).to.throw(Error, 'Invalid projection type.');
            expect(() => cinema.ticketPrice('neshto si drugo')).to.throw(Error, 'Invalid projection type.');
            expect(() => cinema.ticketPrice('3.14')).to.throw(Error, 'Invalid projection type.');
        });
        it("Should return correct price when valid projectionType …", function () {
            expect(cinema.ticketPrice(['Premiere'])).to.equal(12);
            expect(cinema.ticketPrice(['Normal'])).to.equal(7.5);
            expect(cinema.ticketPrice(['Discount'])).to.equal(5.5);
        });
    });
    describe("swapSeatsInHall func …", function () {
        it("Should return correct unsuccessfull message when non-valid input …", function () {
            expect(cinema.swapSeatsInHall(2, 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(11, 11)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 20)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 202)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(31, 202)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, -2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.33, 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 2.33)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('az', 2.33)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('', 2.33)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall([], 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(undefined, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(NaN, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(null, 3)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it("Should return correct successfull message when valid input …", function () {
            expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(11, 20)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 2)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(15, 13)).to.equal('Successful change of seats in the hall.');
        });
    });
});


