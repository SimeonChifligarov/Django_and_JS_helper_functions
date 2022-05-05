function solution(fruitType, weigthInGrams, pricePerKg) {
    const weightInKg = weigthInGrams / 1000;
    const totalPrice = weightInKg * pricePerKg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`);
}


// solution('orange', 2500, 1.80);
// solution('apple', 1563, 2.35);
