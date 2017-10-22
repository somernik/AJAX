// AJAX Project 2
// Sarah Omernik

function Burrito() {
    
    var that = this;
    this.id;
    this.type;
    this.price;
    this.ingredients;

    this.displayDict = {
        "chicken": "Chicken Burrito",
        "steak": "Steak Burrito",
        "carnitas": "Carnitas Burrito",
        "barbacoa": "Barbacoa Burrito",
        "vegetarian": "Vegetarian Burrito",
        "brown": "Brown Rice",
        "white": "White Rice",
        "pinto": "Pinto Beans",
        "black": "Black Beans",
        "pico": "Pico de Gallo Salsa",
        "corn": "Roasted Corn Salsa",
        "green": "Tomatillo - Green Salsa",
        "red": "Tomatillo - Red Salsa",
        "guac": "Guacamole"
    };

    this.priceDict = {
        "chicken": 6.2,
        "steak": 6.75,
        "carnitas": 6.6,
        "barbacoa": 6.6,
        "vegetarian": 6.2,
        "brown": 0,
        "white": 0,
        "pinto": 0,
        "black": 0,
        "pico": 0,
        "corn":0,
        "green":0,
        "red":0,
        "guac":1.4
    };

    this.determinePrice = function() {
        that.price = 0;

        that.ingredients.forEach(function(i, index){

            if (index == 0) {
                that.type = that.displayDict[i];
            }

            that.price += that.priceDict[i];
        });
    }

}