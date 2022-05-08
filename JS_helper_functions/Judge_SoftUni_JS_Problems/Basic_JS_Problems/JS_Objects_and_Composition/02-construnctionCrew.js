function solution(obj) {
    if (obj.dizziness === true) {
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
        obj.dizziness = false;
    }


    return obj;
}

// console.log(solution({
//     weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true
// }
// ));
// console.log(solution({
//     weight: 120,
//     experience: 20,
//     levelOfHydrated: 200,
//     dizziness: true
// }
// ));
// console.log(solution({
//     weight: 95,
//     experience: 3,
//     levelOfHydrated: 0,
//     dizziness: false
// }
// ));
// 