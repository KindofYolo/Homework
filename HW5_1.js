let Cat = {
  name: "Mira",
  age: 5,
  behavior: "Annoy her family",

   getInfo() {
    for (let key in Cat) {
      if (typeof this[key] !== 'function') {  
        console.log(key + ': ' + this[key]);
      }
    }
  }
};


Cat.breed = "Devon Rex";
Cat.task = "Kill the dog";


Cat.getInfo();
