function solution(productsInfo) {
    let productCatalogue = {};
    for (const prod of productsInfo) {
        let [productName, productPrice] = prod.split(' : ');
        productPrice = Number(productPrice);

        let firstLetter = productName[0];

        if(!productCatalogue.hasOwnProperty(firstLetter)) {
            productCatalogue[firstLetter] = {};
        }

        productCatalogue[firstLetter][productName] = productPrice;
    }

    let result = [];

    let firstLetterSorted = Object.keys(productCatalogue).sort((a, b) => a.localeCompare(b));
    for (const letter of firstLetterSorted) {

        result.push(letter);

        let productsOfLetter = Object.entries(productCatalogue[letter])
        .sort((a, b) => a[0].localeCompare(b[0]));

        let productsStrings = productsOfLetter
        .map(pr => `  ${pr[0]}: ${pr[1]}`)
        .join('\n');
        
        result.push(productsStrings);
    }

    return result.join('\n');
}

// console.log(solution([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']
// ));
// console.log(solution([
//     'Banana : 2',
//     'Rubic\'s Cube : 5',
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10']
// ));
// 