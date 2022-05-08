// function solution(citiesInfo) {

//     let products = {};

//     for (const cityInfo of citiesInfo) {
//         let [cityName, productName, productPrice] = cityInfo.split(' | ');
//         productPrice = Number(productPrice);

//         if (!products.hasOwnProperty(productName)) {
//             products[productName] = {city: cityName, price: productPrice};
//         } else if (products[productName]['city'] === cityName) {
//             products[productName]['price'] = productPrice;
//         } else if (productPrice < products[productName]['price']) {
//             products[productName] = {city: cityName, price: productPrice};
//         }
//     }

//     for (const prod in products) {
//         // console.log(`${prod} -> ${products[prod]['price']} (${products[prod]['city']})`);
//         console.log(`${prod} -> ${products[prod].price} (${products[prod].city})`);
//     }
// }

function solution(citiesInfo) {
    let products = {};

    for (const cityInfo of citiesInfo) {
        let [cityName, productName, productPrice] = cityInfo.split(' | ');
        productPrice = Number(productPrice);

        if (!products.hasOwnProperty(productName)) {
            products[productName] = {};
        }

        products[productName][cityName] = productPrice;
    }

    let result = [];
    for (const prod in products) {
        let citySorted = Object.entries(products[prod]).sort((a, b) => a[1] - b[1]);
        let cheapestCity = citySorted[0];

        result.push(`${prod} -> ${cheapestCity[1]} (${cheapestCity[0]})`);

    }
    console.log(result.join('\n'));
}

// solution([
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10']
// );
// 