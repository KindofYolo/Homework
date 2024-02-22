function isNaNCheck(input) {
    if (input !== input || typeof input !== 'number') {
        console.log("The value is not a number.");
    } else {
        console.log("The input is a number.");
    }
}

isNaNCheck(NaN);
