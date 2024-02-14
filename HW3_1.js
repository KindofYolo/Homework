  /* function drawTriangle(size, symbol) {
    for (let x = 1; x <= size; x++) {
        let line = '';
        for (let y = 0; y < x; y++) {
            line += symbol;
        }
        console.log(line);
    }
 }

drawTriangle(10, "A");   */







function drawTriangle(size, symbol) {
    let x = 1;

    while (x <= size) {
        let y = 0;
        let line = '';

        while (y < x) {
            line += symbol;
            y++;
        }

        console.log(line);
        x++;
    }
}

drawTriangle(8, '$');
