function init() {
    var addBurritobutton = document.getElementById("addBurrito");

    if (window.addEventListener) {
        addBurritobutton.addEventListener("click", addBurritoToOrder, false);
    } else {
        addBurritobutton.attachEvent("onclick", addBurritoToOrder);
    }


}

function addBurritoToOrder() {
    var ingredients = Array();
    var burrito = new Burrito();

    // get the values
    // TODO validate
    var type = document.getElementById("burrito").value;
    ingredients.push(type);

    var rice;
    if (document.getElementById("white").checked)
    {
        rice = document.getElementById("white").value;
        ingredients.push(rice);
        
    } else if(document.getElementById("brown").checked) {
        rice = document.getElementById("brown").value;
        ingredients.push(rice);
        
    }

    var beans;
    if (document.getElementById("pinto").checked)
    {
        beans = document.getElementById("pinto").value;
        ingredients.push(beans);
    } else if (document.getElementById("black").checked){
        beans = document.getElementById("black").value;
        ingredients.push(beans);
    }

    var salsas = document.getElementsByName("salsa");
    salsas.forEach(function(salsa){
        if (salsa.checked) {
            ingredients.push(salsa.value);
        }        
    });

    var guac = document.getElementById("guac");
    if (guac.checked) {

        ingredients.push(guac.value);
    }
 
    // add ingredients to burrito    
    burrito.ingredients = ingredients;
    
    // calculate total
    burrito.determinePrice();

    // print burrito to receipt
    addDisplayToPage(burrito);
    // add to order total
    
    // clear values
}

function removeBurritoFromOrder() {
    // get specific burrito
    // remove burrito from receipt
    // subtract from total

}

function Burrito() {
    
    var that = this;
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

function addDisplayToPage(burrito) {
    
        // Create new div
        var div = document.createElement("div");
        // TODO add id to be able to delete later
    
        // Create new inputs
        var header = document.createElement("h4");
        var footer = document.createElement("p");
        
        // TODO Assign input attributes
    
        var headerText = document.createTextNode(burrito.type);
        header.appendChild(headerText);
        div.appendChild(header);

        burrito.ingredients.forEach(function(i, index){
            if (index != 0) {
                var currentIngred = document.createTextNode("+ " + burrito.displayDict[i]);
                var currentP = document.createElement("p");
                currentP.appendChild(currentIngred);
                div.appendChild(currentP);
            }
        });

        var footerText = document.createTextNode("Price: " + burrito.price); // TODO format price
        footer.appendChild(footerText);
        div.appendChild(footer);

        // TODO add button to remove burrito

        // Position elements on html page
        document.body.appendChild(div);
    }