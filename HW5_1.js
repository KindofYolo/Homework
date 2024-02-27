let Cat = {
  name: "Mira",
  age: 5,
  behavior: "Annoy her family",

   getInfo() {
    for (let key in Cat) {
      if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {    // If Я украл, я не допер как сделать , 100 не ставь.Иначе у меня выводился getInfo: f или тупо был цикл бесконечный, короче я сдался)))
        console.log(key + ': ' + this[key]);
      }
    }
  }
};


Cat.breed = "Devon Rex";
Cat.task = "Kill the dog";


Cat.getInfo();
