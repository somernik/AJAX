/*

    AJAX Assignment 4
    Sarah Omernik
*/
var init = function() {

    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var cart = document.getElementById("cart");

    btn1.onclick = btn_click;
    btn2.onclick = btn_click;
    btn3.onclick = btn_click;

    if (window.addEventListener) {
        btn1.addEventListener("click", eventListenerEvent, false);
        btn2.addEventListener("click", eventListenerEvent, false);
		btn3.addEventListener("click", eventListenerEvent, false);
    } else {
        btn1.attachEvent("onclick", eventListenerEvent);
		btn2.attachEvent("onclick", eventListenerEvent);
		btn3.attachEvent("onclick", eventListenerEvent);
    }
}

function btn_click(btnValue) {
    var text = document.createTextNode(this.value);
    var p = document.createElement("p");

    p.appendChild(text);
    cart.appendChild(p);
}

function eventListenerEvent() {
    var control;

    if(window.event) {
        control = window.event.srcElement;
    } else {
        control = this;
    }

    console.log("standards: " + control.value);
}