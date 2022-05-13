class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
        this._participantsName = [];

    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        // if (this.listOfParticipants.filter(p => p.name == name).length > 0) {
        if (this._participantsName.includes(name)) {
            return `The ${name} is already registered at the camp.`
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        const participant = { name, condition, power: 100, wins: 0 };
        this.listOfParticipants.push(participant);
        this._participantsName.push(name);

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        if (!this._participantsName.includes(name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        const currentParticipant = this.listOfParticipants.find(p => p.name == name);
        this.listOfParticipants = this.listOfParticipants.filter(p => p != currentParticipant);
        this._participantsName = this._participantsName.filter(p => p != name);

        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame == 'WaterBalloonFights') {
            if (!this._participantsName.includes(participant1) || !this._participantsName.includes(participant2)) {
                throw new Error(`Invalid entered name/s.`);
            }

            const player1 = this.listOfParticipants.filter(p => p.name == participant1)[0];
            const player2 = this.listOfParticipants.filter(p => p.name == participant2)[0];
            if (!participant1 || !participant2 || player1.condition != player2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (player1.power == player2.power) {
                return `There is no winner.`
            } else if (player1.power > player2.power) {
                player1.wins += 1;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`
            } else {
                player2.wins += 1;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`
            }
        }

        if (typeOfGame == 'Battleship') {
            if (!this._participantsName.includes(participant1)) {
                throw new Error(`Invalid entered name/s.`);
            }

            const currentPlayer = this.listOfParticipants.filter(p => p.name == participant1)[0];
            currentPlayer.power += 20;

            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }

    toString () {
        const result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];

        const sortedParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);

        for (let p of sortedParticipants) {
            result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
        }

        return result.join('\n');
    }
}


// const SummerCamp = result;
// let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');

// console.log(camp.registerParticipant('Petar Petarson', 'student', 300)) // "The Petar Petarson was successfully registered.");

// console.log(camp.registerParticipant('Sara Dickinson', 'child', 200)) //, "The Sara Dickinson was successfully registered.");

// console.log(camp.unregisterParticipant('Sara Dickinson')) //, "The Sara Dickinson removed successfully.");
// camp.unregisterParticipant('John Petarson') //.to.throw("The John Petarson is not registered in the camp.");