function solution(firstNum, secondNum) {
    while (secondNum != 0) {
        let tempVar = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = tempVar;
    }

    console.log(firstNum);
}

// solution(15, 5);
// solution(2154, 458);
