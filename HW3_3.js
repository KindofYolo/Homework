function pow(x, y) {
     let result = 1;
 
     for (let i = 1; i <= y; i++) {
         result *= x;
     }
 
     return result;
 }
 
 let result = pow(10, 5);
 console.log(result); 

 