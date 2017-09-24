function validate() {
    
    var gender = Array("male", "female");
    var genderChecked = checkIfRadioOrCheckboxesAreValid(gender);
    var course = Array("java", "php", "aspnet");
    var courseChecked = checkIfRadioOrCheckboxesAreValid(course);

    var inputIds = Array("name", "email", "area code", "prefix", "suffix", "address", "city", "state", "zip");
    var inputs = [];
    var invalid = [];

    inputIds.forEach(function(id, i) {
        var element = document.getElementById(id);
        inputs.push(element); // Saving the element so we dont have to do another getElementById later

        if (!element.value.length > 0) {
            invalid.push(i);
        } else {
            element.classList.remove("invalidDisplay");
            var errorId = element.id + "Error";
            var errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.parentNode.removeChild(errorElement);
            }
        }
    });

    if (invalid.length > 0 || courseChecked.length == 0 || courseChecked.length == 0) { // if there any invlaid inputs
        
        invalid.forEach(function(e){
            var element = inputs[e];
            var errorId = element.id + "Error";
            element.className = "invalidDisplay";

            if(!document.getElementById(errorId)) {

                var error = document.createElement("p");
                error.id = errorId;
                error.className = "errorText";
                var errorText = document.createTextNode(element.id + " is required");
                
                error.appendChild(errorText);

                // Add error message to html page
                element.parentNode.insertBefore(error, element.nextSibling);
            }

        });

        if (courseChecked.length == 0) {
            checkGenderCourses("checkboxes", "Previous Course(s)", course);
        }

        if (genderChecked.length == 0) {
            checkGenderCourses("genders", "Gender", gender);
        }

        // Remove output if it exists and any elements are invalid
        var output = document.getElementById("output");
        if (output) {
            document.body.removeChild(output);
        }

        return false;

    } else {
        // print values

        var output = document.createElement("div");
        addHeaderToDivElement(output, "Output from User Entered Values");
        output.id = "output";

        inputs.forEach(function(e, i){
            var elementName = e.id;
            var elementValue = e.value;

            var outputLine = document.createElement("p");
            var outputText = '';
            if (elementName == 'area code') { 
                outputText = document.createTextNode("Phone: (" + elementValue + ") " + inputs[i + 1].value + "-" + inputs[i + 2].value);
                outputLine.appendChild(outputText);

                output.appendChild(outputLine);
            } else if (elementName != 'prefix' && elementName != 'suffix') {

                outputText = document.createTextNode(elementName + ": " + elementValue);
                outputLine.appendChild(outputText);

                output.appendChild(outputLine);
            }
        });
        
        output.appendChild(generateOutput("Gender: ", genderChecked));

        output.appendChild(generateOutput("Previous Course(s): ", courseChecked));

        // Remove output if it exists and any elements are invalid
        var oldOutput = document.getElementById("output");
        if (oldOutput) {
            document.body.replaceChild(output, oldOutput);
        } else {
            document.body.appendChild(output);
        }

        return false;
    }
} 

function checkIfRadioOrCheckboxesAreValid(arrayOfElementIds) {

    var arrayForCheckedValues = [];

    arrayOfElementIds.forEach(function(e){
        var element = document.getElementById(e);
        
        if (element.checked) {
            arrayForCheckedValues.push(element.value);
        }
        
    });

    var errorElement = document.getElementById(arrayOfElementIds[arrayOfElementIds.length - 1] + "Error");

    if (errorElement) {
        document.getElementById("checkboxes").classList.remove("invalidDiv");
        document.getElementById("genders").classList.remove("invalidDiv");
        errorElement.parentNode.removeChild(errorElement);
    }

    return arrayForCheckedValues;
}

function addHeaderToDivElement (divElement, header) {
    // add header to output
    var headerLine = document.createElement("h2");
    var headerText = document.createTextNode(header);

    headerLine.appendChild(headerText);

    divElement.appendChild(headerLine);
}

function checkGenderCourses(elementId, message, elementList) {
    var container = document.getElementById(elementId);
    container.className = "invalidDiv";

    var element = document.getElementById(elementList[elementList.length - 1]);
    var error = document.createElement("p");
    error.className = "errorText";
    var errorId = element.id + "Error";

    error.id = errorId;
    var errorText = document.createTextNode(message + " is required");
    
    error.appendChild(errorText);

    // Remove output if it exists
    var oldOutput = document.getElementById(errorId);
    if (oldOutput) {
        // Replace error message
        element.parentNode.replaceChild(error, oldOutput);
    } else {
        // Add error message to html page
        element.parentNode.insertBefore(error, element.nextSibling.nextSibling);
    }
}

function generateOutput(label, elementList) {
    var line = document.createElement("p");
    var text = label;

    elementList.forEach(function(e, i){
        if (i == 0) {
            text += e;
        } else {
            text += ", " + e;
        }

    });

    var outputText = document.createTextNode(text);

    line.appendChild(outputText);
    return line;
}

var init = function() {
    var button = document.getElementById("validate");
    button.onclick = validate;
}