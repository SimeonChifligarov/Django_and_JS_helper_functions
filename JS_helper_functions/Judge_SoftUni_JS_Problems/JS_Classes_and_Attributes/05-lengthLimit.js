class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    get innerLength() {
        return this._innerLength;
    }

    set innerLength(value) {
        this._innerLength = value > 0 ? value : 0;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        // let newLength = this.innerLength -length;
        // this.innerLength = newLength;
        this.innerLength -= length;
    }

    toString() {
        if (this.innerString.length <= this.innerLength) {
            return this.innerString;
        } else if (this.innerLength != 0) {
            return this.innerString.slice(0, this.innerLength) + '...';
        } else {
            return '...';
        }
    }
}

// let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test

// test.decrease(3);
// console.log(test.toString()); // Te...

// test.decrease(5);
// console.log(test.toString()); // ...

// test.increase(4); 
// console.log(test.toString()); // Test


// let s = new Stringer("Viktor", 6);
// s.decrease(3);
// console.log(s.toString());
