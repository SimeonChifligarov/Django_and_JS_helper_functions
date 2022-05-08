function solution(arrayStrings) {
    calorieObj = {};

    for (let i = 0; i < arrayStrings.length; i += 2) {
        calorieObj[arrayStrings[i]] = Number(arrayStrings[i + 1]);
    }

    console.log(calorieObj);
}

// solution(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// solution(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
// 