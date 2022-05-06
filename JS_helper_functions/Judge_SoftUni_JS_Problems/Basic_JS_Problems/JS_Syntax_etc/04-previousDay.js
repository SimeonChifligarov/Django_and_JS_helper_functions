function solution(year, month, day) {
    const monthIndex = month - 1;
    let dayZ = new Date(year, monthIndex, day);
    dayZ.setDate(dayZ.getDate() - 1);

    console.log(`${dayZ.getFullYear()}-${dayZ.getMonth() + 1}-${dayZ.getDate()}`);
}

// solution(2016, 9, 30);
// solution(2016, 10, 1);
