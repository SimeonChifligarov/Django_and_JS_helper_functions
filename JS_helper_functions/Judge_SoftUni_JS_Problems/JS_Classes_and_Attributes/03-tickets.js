function solution(ticketsArr, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        compareMe(other, criterion) {
            if (typeof this[criterion] == 'string') {
                return this[criterion].localeCompare(other[criterion]);
            } else {
                return this[criterion] - other[criterion];
            }
        }
    }


    let tickets = [];

    for (const currentTicket of ticketsArr) {
        let [destination, price, status] = currentTicket.split('|');
        price = Number(price);

        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    tickets.sort((a, b) => a.compareMe(b, sortingCriterion));
    return tickets;
}

// console.log(solution([
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination'
// ));
// 