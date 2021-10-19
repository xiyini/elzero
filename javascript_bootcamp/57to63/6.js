function multiply(...numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "string") {
            continue;
        } else if (!(numbers[i].isInteger)){
            numbers[i] = Math.trunc(numbers[i]);
        }
        result *= numbers[i];
    }
    console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000