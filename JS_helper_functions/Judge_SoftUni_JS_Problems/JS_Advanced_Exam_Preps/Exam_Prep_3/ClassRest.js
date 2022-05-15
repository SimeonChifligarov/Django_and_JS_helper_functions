class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }


    loadProducts(products) {
        const currentHistory = [];
        for (let prod of products) {
            let [productName, productQuantity, productTotalPrice] = prod.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (this.budgetMoney >= productTotalPrice) {
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice;
                currentHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                currentHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return currentHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        const currentMeal = { products: [], price };
        for (let neededP of neededProducts) {
            let [productName, productQuantity] = neededP.split(' ');
            productQuantity = Number(productQuantity);

            let curP = {};
            curP[productName] = productQuantity;
            currentMeal.products.push(curP);
        }

        this.menu[meal] = currentMeal;


        if (Object.keys(this.menu).length == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return "Our menu is not ready yet, please come later...";
        } else {
            let result = [];
            for (let m in this.menu) {
                result.push(`${m} - $ ${this.menu[m].price}`);
            }

            return result.join('\n');
        }
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        const currentM = this.menu[meal];
        // console.log(currentM.products)

        for (let p of currentM.products) {
            // console.log(this.stockProducts);
            let pName = Object.keys(p)[0];
            let pQuant = Object.values(p)[0];
            // console.log(pName, pQuant);
            // console.log(this.stockProducts[pName]);
            this.stockProducts[pName] -= pQuant;
            // console.log(this.stockProducts[pName]);
        }
        console.log(this.stockProducts);
        if (Object.values(this.stockProducts).some(x => x < 0)) {
            for (let p of currentM.products) {
                let pName = Object.keys(p)[0];
                let pQuant = Object.values(p)[0];
                this.stockProducts[pName] += pQuant;
            }
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        } else {
            this.budgetMoney += currentM.price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${currentM.price}.`
        }
    }
}


// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// console.log(kitchen.showTheMenu());

// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));

//Testing the constructor
// const Restaurant = result;
// let test = new Restaurant(1000);
// console.log(test.budgetMoney) //.to.equal(1000);
// console.log(typeof test.menu) //.to.equal('object');
// console.log(typeof test.stockProducts) //.to.equal('object');
// console.log(typeof test.history) //.to.equal('object');

// Test load Products when the budget is bigger
// const Restaurant = result;
// let test = new Restaurant(1000);
// test.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']);
// console.log(test.budgetMoney) //.to.equal(895);


// Testing makeTheOrder
// const Restaurant = result;
let test = new Restaurant(1000);
test.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
test.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(test.budgetMoney);

let res = test.makeTheOrder('frozenYogurt');
console.log(res) //.to.equal("Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.");
// // console.log(test.showTheMenu());
// // console.log(test.stockProducts);
// // console.log(test.menu);
// // console.log(test.menu.frozenYogurt);
console.log(test.budgetMoney);


// Testing makeTheOrder
// const Restaurant = result;
// let test = new Restaurant(1000);
// test.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// test.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// let res = test.makeTheOrder('frozenYogurt');
// expect(res).to.equal("Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.");