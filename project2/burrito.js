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
}