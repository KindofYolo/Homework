function shuffle(somearray) {
    for (let i = somearray.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
    
        [somearray[i], somearray[randomIndex]] = [somearray[randomIndex], somearray[i]];
    }
}






let somearray = [1, 2, 3, 4, 5, 6, 7, 8, 9,'a','b','c','d'];

shuffle(somearray);

console.log (somearray);
