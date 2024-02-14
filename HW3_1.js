 function drawTriangle(size, symbol) {
    for (let x = 1; x <= size; x++) {
        let line = '';
        for (let y = 0; y < x; y++) {
            line += symbol;
        }
        console.log(line);
    }
 }

drawTriangle(10, "A");
