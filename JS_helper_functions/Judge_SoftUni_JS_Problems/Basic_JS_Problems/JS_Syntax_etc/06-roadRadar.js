function solution(speed, area) {
    areaRestiction = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }

    let allowedSpeed = areaRestiction[area];
    let speedingScore = speed - allowedSpeed;
    let speedingStatus = '';

    if (speedingScore <= 0) {
        console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
    } else if (speedingScore <= 20) {
        speedingStatus = 'speeding';
    } else if (speedingScore <= 40) {
        speedingStatus = 'excessive speeding';
    } else {
        speedingStatus = 'reckless driving'
    }

    if (speedingScore > 0) {
        console.log(`The speed is ${speedingScore} km/h faster than the allowed speed of ${allowedSpeed} - ${speedingStatus}`);
    }
}

// solution(40, 'city');
// solution(21, 'residential');
// solution(120, 'interstate');
// solution(200, 'motorway');
