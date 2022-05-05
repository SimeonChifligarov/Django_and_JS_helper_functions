function solution(number) {
    let numberAsString = number.toString();
    let totalSum = parseInt(numberAsString[0]);
    let isSame = true;

    for (let index = 1; index < numberAsString.length; index++) {
        const element = numberAsString[index];
        if (element != numberAsString[index - 1]) {
            isSame = false;
        }

        totalSum += parseInt(element);
    }

    console.log(isSame);
    console.log(totalSum);
}

// solution(2222222);
// solution(1234);
