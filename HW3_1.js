function drawTriangle(height, symbol) {
    let line = '';

    for (let i = 1; i <= height; i++) {
        line += symbol;
        console.log(line);
    }
}

drawTriangle(8, '$');





/*function drawTriangle(height, symbol) {
    let line = '';
    let i = 1;

    while (i <= height) {
        line += symbol;
        console.log(line);
        i++;
    }
}

drawTriangle(10, '=');    */