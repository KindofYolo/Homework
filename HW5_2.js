var services = {
    "стрижка": "60 грн",
    "гоління": "60 грн",
    "Миття голови": "100 грн",
    
     price () {
        var total = 0;

        for (var key in this) {
            if ((typeof this[key] === 'number' || (typeof this[key] === 'string' && !isNaN(parseFloat(this[key])))) && key !== 'price' && key !== 'minPrice' && key !== 'maxPrice' ) {    
                total += parseFloat(this[key]);
        }
        }

        return total;

    },

    minPrice() {
        var min = 0; 
        var firstValidPrice = true;

        for (var key in this) {
            if ((typeof this[key] === 'number' || (typeof this[key] === 'string' && !isNaN(parseFloat(this[key])))) && key !== 'price' && key !== 'minPrice' && key !== 'maxPrice') {   
                if (firstValidPrice) {
                    min = parseFloat(this[key]);
                    firstValidPrice = false;
                } else {
                    min = Math.min(min, parseFloat(this[key]));

            }
            }

        }

        return min;

    },

    maxPrice() {
        var max = 0;
        var firstValidPrice = true;

        for (var key in this) {
            if ((typeof this[key] === 'number' || (typeof this[key] === 'string' && !isNaN(parseFloat(this[key])))) && key !== 'price' && key !== 'minPrice' && key !== 'maxPrice') {
                if (firstValidPrice) {
                    max = parseFloat(this[key]);
                    firstValidPrice = false;
                } else {
                    max = Math.max(max, parseFloat(this[key]));
                }
            }
        }

        return max;
    }

};

services['Розбити скло'] = "200 грн";
services['Батько і син'] = "300 грн";
services['Розбити друге скло'] = 500;  
services['Розбити трете скло'] = 'По домовленості';  
services['Кола'] = 20;  



console.log("Total price:", services.price() + ' грн');
console.log("Minimum price:", services.minPrice() + ' грн');
console.log("Maximum price:", services.maxPrice() + ' грн');