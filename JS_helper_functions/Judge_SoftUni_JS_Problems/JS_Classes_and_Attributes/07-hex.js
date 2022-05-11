class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x`+ this.value.toString(16).toUpperCase();
    }
     
    plus(myNumber) {
        // if (typeof myNumber == 'number') {
        //     this.value += myNumber;
        // } else {
        //     this.value += myNumber.value;
        // }
        this.value += myNumber.value;
        return this;
    }

    minus(myNumber) {
        // if (typeof myNumber == 'number') {
        //     this.value -= myNumber;
        // } else {
        //     this.value -= myNumber.value;
        // }
        this.value -= myNumber.value;
        return this;
    }

    parse(string) {
        return parseInt(string, 16);
    } 

}

// let FF = new Hex(255);
// console.log(FF.toString());
// FF.valueOf() + 1 == 256;
// let a = new Hex(10);
// let b = new Hex(5);
// console.log(a.plus(b).toString());
// console.log(a.plus(b).toString()==='0xF');
// console.log(FF.parse('AAA'));
// // 


// let a = new Hex(10);
// let b = new Hex(5);

// console.log(a.minus(b).toString());


// let Hex = result;
// let FF = new Hex(255);
// assert.instanceOf(FF,Hex);
// assert.equal(FF.valueOf(),255);
// console.log(FF.value);

// let act = FF.toString();
// // let exp = "0xFF";
// // assert.equal(act,exp);
// console.log(act);

// assert.isTrue(FF.valueOf() -1  == 254);
// console.log(FF.value - 1);

// let a = new Hex(10);
// let b = new Hex(5);
// let c = new Hex(155);
// // let act2 = a.plus(c).toString();
// // // let exp2 = "0xA5";
// console.log(a.plus(c));
// console.log(a.plus(c).toString());

// assert.equal(act2,exp2);
// let act3 = a.minus(b).toString();
// let exp3 = "0x5";
// assert.equal(act3,exp3);

// console.log(a.minus(b));
// console.log(a.minus(b).toString());




// let Hex = result;
// let FF = new Hex(255);
// assert.instanceOf(FF,Hex);
// assert.equal(FF.valueOf(),255);

// let act = FF.toString();
// let exp = "0xFF";
// assert.equal(act,exp);
// console.log(act);

// assert.isTrue(FF.valueOf() -1  == 254);
let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
// let act2 = a.plus(c).toString();
// let exp2 = "0xA5";
// assert.equal(act2,exp2);
// console.log(a.plus(c));
let act3 = a.minus(b).toString();
// let exp3 = "0x5";
// assert.equal(act3,exp3);
console.log(act3);