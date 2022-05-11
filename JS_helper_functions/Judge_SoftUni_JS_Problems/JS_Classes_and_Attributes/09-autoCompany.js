function solve(strings) {
    let carBrands = {};

    for (const str of strings) {
        let [carBrand, carModel, producedCars] = str.split(' | ');
        
        if (!carBrands.hasOwnProperty(carBrand)) {
            carBrands[carBrand] = {};
        }

        if (!carBrands[carBrand].hasOwnProperty(carModel)) {
            carBrands[carBrand][carModel] = 0;
        }

        carBrands[carBrand][carModel] += Number(producedCars);

    }

    for (const currentBrand in carBrands) {
        console.log(currentBrand);

        for (const currentModel in carBrands[currentBrand]) {
console.log(`###${currentModel} -> ${carBrands[currentBrand][currentModel]}`);
        }
    }
}

// solve([
//     'Audi | Q7 | 1000',
//     'Audi | Q6 | 100',
//     'BMW | X5 | 1000',
//     'BMW | X6 | 100',
//     'Citroen | C4 | 123',
//     'Volga | GAZ-24 | 1000000',
//     'Lada | Niva | 1000000',
//     'Lada | Jigula | 1000000',
//     'Citroen | C4 | 22',
//     'Citroen | C5 | 10']
// );
// 