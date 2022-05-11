class List {
    constructor() {
        this._list = [];
        this.size = 0;
    }
    
    // get size() {
    //     return this._list.length;
    // }

    add(element) {
        this._list.push(element);
        this.size++;
        this._sort();
    }

    remove(index) {
        if (this._validateIndex(index)) {
            this._list.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (this._validateIndex(index)) {
            return this._list[index];
        }
    }

    _sort() {
        this._list.sort((a, b) => a - b);
    }

    _validateIndex(index) {
        return (index >= 0) && (index < this.size);
    }
}

// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1)); 
// list.remove(1);
// console.log(list.get(1));

// expect(result.prototype.hasOwnProperty('add')).to.equal(true, "Function add() was not found");
// expect(result.prototype.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found");
// expect(result.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

// Instantiate and test functionality
// var myList = new List();
// expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

// myList.add(5);
// // expect(myList.get(0)).to.equal(5, "Element wasn't added");
// console.log(myList.get(0));

// myList.add(3);
// expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");
// console.log(myList.get(0));
// console.log(myList);

// myList.remove(0);
// expect(myList.get(0)).to.equal(5, "Element wasn't removed");
// expect(myList.size).to.equal(1, "Element wasn't removed");