function solution(x1, y1, x2, y2) {
    function isValidDistance(ax1, ay1, ax2, ay2) {
        let checkIf = Math.sqrt((ax2 - ax1) ** 2 + (ay2 - ay1) ** 2);
        if (checkIf % 1 == 0) {
            return true;
        }
        return false;
    }

    let comparison = [[x1, y1, 0, 0], [x2, y2, 0, 0], [x1, y1, x2, y2]];
    comparison.forEach(element => {
        isValidDistance(...element)
        ? console.log(`{${element[0]}, ${element[1]}} to {${element[2]}, ${element[3]}} is valid`)
        : console.log(`{${element[0]}, ${element[1]}} to {${element[2]}, ${element[3]}} is invalid`);
    });

}

// solution(3, 0, 0, 4);
// solution(2, 1, 1, 1);
