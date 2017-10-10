function init() {
    var addBurritobutton = document.getElementById("addBurrito");

    if (window.addEventListener) {
        addBurritobutton.addEventListener("click", addBurritoToOrder, false);
    } else {
        addBurritobutton.attachEvent("onclick", addBurritoToOrder);
    }


}

function addBurritoToOrder() {
    alert("added");
    var ingredients = Array();

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
 
    // print burrito to receipt
        //items
        var burritoTotal = 0;

        var displayDict = {
            "chicken": "Chicken Burrito",
            "steak": "Steak Burrito",
            "carnitas": "Carnitas Burrito",
            "barbacoa": "Barbacoa Burrito",
            "vegetarian": "Vegetarian Burrito",
            "brown": "Brown Rice",
            "white": "White Rice",
            "pinto": "Pinto Beans",
            "black": "Black Beans",
            "pico": "Pico de Gallo",
            "corn": "Roasted Corn",
            "green": "Tomatillo - Green",
            "red": "Tomatillo - Red",
            "guac": "Guacamole"
        };

       

        //burrito total
        var priceDict = {
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

        ingredients.forEach(function(i){
            alert(displayDict[i]);
            burritoTotal += priceDict[i];
        });
    // add to order total
    alert(burritoTotal);
    // clear values
}

function removeBurritoFromOrder() {
    // get specific burrito
    // remove burrito from receipt
    // subtract from total

}