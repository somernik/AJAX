// AJAX Project 2
// Sarah Omernik

var currentId = 0;

var order;

function init() {
    order = new Order();

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
    currentId += 1;
    burrito.id = currentId;

    // get the values
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

    //add to order total
    order.addItem(burrito);

    var p = document.createElement("h3");
    var text = document.createTextNode("Order Total: " + formatAsCurrency(order.total));

    p.appendChild(text);

    // add total to page
    if(document.getElementById("total")) {
        var total = document.getElementById("total");
        total.replaceChild(p, total.firstChild);

    } else {
       var element =  document.createElement("div");
       element.id = "total";
       element.appendChild(p);
       document.body.appendChild(element);

    }

    // print burrito to receipt
    addDisplayToPage(burrito);

}

function removeBurritoFromOrder() {
    // get specific burrito
    var element = document.getElementById(this.id);
    
    // subtract from total
    order.removeItem(this.id);

    // remove burrito from receipt
    document.body.removeChild(element.parentElement);

    var total = document.getElementById("total");
    
    var p = document.createElement("h3");
    var text = document.createTextNode("Order Total: " + formatAsCurrency(order.total));

    p.appendChild(text);

    // update total
    total.replaceChild(p, total.firstChild);
}

function addDisplayToPage(burrito) {
    
    // Create new div
    var div = document.createElement("div");
    div.id = "div" + burrito.id;

    // Create new elements
    var header = document.createElement("h4");
    var footer = document.createElement("p");
    
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

    var footerText = document.createTextNode("Price: " + formatAsCurrency(burrito.price));
    footer.appendChild(footerText);
    div.appendChild(footer);

    //add button to remove burrito
    var removeButton = document.createElement("input");
    removeButton.type = "button";
    removeButton.id = burrito.id;
    removeButton.value = "Remove Burrito";

    if (window.addEventListener) {
        removeButton.addEventListener("click", removeBurritoFromOrder, false);
    } else {
        removeButton.attachEvent("onclick", removeBurritoFromOrder);
    }

    div.appendChild(removeButton);

    // Position elements on html page
    document.body.appendChild(div);
}

function formatAsCurrency(number) {
    var formatted = number.toFixed(2).replace(/./g, function(c, i, a) {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });
    return "$" + formatted;
}

