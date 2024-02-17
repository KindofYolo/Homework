/* function drawTriangle(size, symbol) {
    let line = '';

    for (let i = 1; i <= size; i++) {
        line += symbol;
        console.log(line);
    }
}

drawTriangle(8, '$');   */





function drawTriangle(size, symbol) {
    let line = '';
    let i = 1;

    while (i <= size) {
        line += symbol;
        console.log(line);
        i++;
    }
}

drawTriangle(10, '=');    