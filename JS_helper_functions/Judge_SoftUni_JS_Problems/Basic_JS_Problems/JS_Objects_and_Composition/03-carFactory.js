function solution(objRequierments) {
    engines = {
        Small: { power: 90, volume: 1800 },
        Normal: { power: 120, volume: 2400 },
        Monster: { power: 200, volume: 3500 }
    }


    carObj = { model: objRequierments.model };

    if (objRequierments.power <= 90) {
        carObj.engine = engines['Small'];
    } else if (objRequierments.power <= 120) {
        carObj.engine = engines['Normal'];
    } else if (objRequierments.power > 120) {
        carObj.engine = engines['Monster'];
    }

    carObj.carriage = {
        type: objRequierments.carriage,
        color: objRequierments.color
    };

    let wheels = objRequierments.wheelsize % 2 == 1 ?
        [objRequierments.wheelsize, objRequierments.wheelsize, objRequierments.wheelsize, objRequierments.wheelsize] :
        [objRequierments.wheelsize - 1, objRequierments.wheelsize - 1, objRequierments.wheelsize - 1, objRequierments.wheelsize - 1];

    carObj.wheels = wheels;

    return carObj;
}

// console.log(solution({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }
// ));
// console.log(solution({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
// }
// ));

// console.log(solution({
//     model: 'Ferrari',
//     power: 200,
//     color: 'red',
//     carriage: 'coupe',
//     wheelsize: 21
// }));
// 