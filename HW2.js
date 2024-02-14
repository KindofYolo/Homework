var yearsInput = prompt("Введіть кількість років");

if (yearsInput === null || yearsInput === "") {
    console.log("Введення скасовано або не введено.");
} else if (!isNaN(yearsInput) && yearsInput >= 0) {
    var wordForm;
    if (yearsInput % 10 === 1 && yearsInput % 100 !== 11) {
        wordForm = "рік";
    } else if ((yearsInput % 10 >= 2 && yearsInput % 10 <= 4) && (yearsInput % 100 < 10 || yearsInput % 100 >= 20)) {
        wordForm = "роки";
    } else {
        wordForm = "років";
    }

    console.log(yearsInput + ' ' + wordForm);
} else {
    console.log("Будь ласка, введіть не від'ємне число.");
}