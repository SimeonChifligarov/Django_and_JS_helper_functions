function solution(steps, stepLenght, speedKmh) {
    let distance = steps * stepLenght;
    let breaksTimeSecs = Math.floor(distance / 500) * 60;
    let speedMps = speedKmh * (1000 / 3600);

    let timeWalkingSecs = distance / speedMps;
    // console.log(timeWalkingSecs + breaksTimeSecs);

    let totalTimeSecs = timeWalkingSecs + breaksTimeSecs;

    let hoursWalking = Math.trunc(totalTimeSecs / 3600);
    totalTimeSecs -= hoursWalking * 3600;
    let minutesWalking = Math.trunc(totalTimeSecs / 60);
    totalTimeSecs -= minutesWalking * 60;
    let secondsWalking = Math.ceil(totalTimeSecs);

    console.log(`${hoursWalking.toString().padStart(2, "0")}:${minutesWalking.toString().padStart(2, "0")}:${secondsWalking.toString().padStart(2, "0")}`);

}

// solution(4000, 0.60, 5);
// solution(2564, 0.70, 5.5);
