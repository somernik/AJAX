function init() {

    // Define string values
    var divId = "abc";
    var firstInputType = "text";
    var firstInputId = "txtname";
    var secondInputType = "button";
    var secondInputValue = "click me";

    // Create new div
    var div = document.createElement("div");
    div.id = divId;

    // Create new inputs
    var firstInput = document.createElement("input");
    var secondInput = document.createElement("input");

    // Assign input attributes
    firstInput.type = firstInputType;
    firstInput.id = firstInputId;

    secondInput.type = secondInputType;
    secondInput.value = secondInputValue;

    // Add elements to html page
    document.body.appendChild(div);
    document.getElementById(divId).appendChild(firstInput);
    document.getElementById(divId).appendChild(secondInput);

}

/*
<div id="abc">
<input type="text" id="txtName" />
<input type="button" value="click me" />
</div>
*/
