function solution() {
    const recipes = {
        apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
        lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
        burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    const storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    function restock(element, quantity) {
        storage[element] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        const remainingStorage = {};

        for (const el in recipes[recipe]) {
            const remainig = storage[el] - recipes[recipe][el] * quantity;

            if (remainig < 0) {
                return `Error: not enough ${el} in stock`;
            } else {
                remainingStorage[el] = remainig;
            }

        }

        Object.assign(storage, remainingStorage);
        
        return 'Success';
    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
    }

    function commands(str) {
        let [command, item, quantity] = str.split(" ");
        quantity = Number(quantity);

        switch(command) {
            case "restock":
                return restock(item, quantity);
            case "prepare":
                return prepare(item, quantity);
            case "report":
                return report();
        }
    }

    return commands;

}


// let manager = solution();

// CASE No 1 
// // console.log(manager("restock flavour 50")); // Success 
// // console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 


// CASE No 2
// (// let manager = solution();)

// console.log(manager("restock flavour 50"));
// console.log(manager("prepare lemonade 4"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));

// console.log("------------------------");

// CASE No 3
// (// let manager = solution();)

// console.log(manager("prepare turkey 1"));
// console.log(manager("restock protein 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("report"));
// 