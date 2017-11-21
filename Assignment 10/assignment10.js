/*

    AJAX Assignment 10
    Sarah Omernik

    in the .ready method, do the following:

    Create a click event handler for btnText. In the click event handler, 
    make a $.get request to a url that returns the plain text "hello". 
    Output the server response to the console.

    Create a click event handler for btnJSON. In the click event handler, 
    make a $.post request to a url that returns a JSON object with the fields: 
    id, name, and email (along with corresponding data). 
    Output the id, name, and email using jQuery DHTML. 
    The $.post method should pass the user-entered value from txtName and that 
    value should be embedded into the JSON response as the value of the name field

    Create a click event handler for btnXML. In the click event handler, 
    make a $.ajax request to a url that returns xml: 
    <user><id>1</id><name>bill</name><email>bgates@msn.com</email></user>
*/

$(document).ready(function() {

    $("body").on("click", "#btnText", getText);
    $("body").on("click", "#btnJSON", getJSON);
    $("body").on("click", "#btnXML", getXML);

});

function getText() {
    $.get("plainText.php", function(data) {
		console.log(data);
	});
}

function getJSON() {
    var name = $("#txtName").val();
    $.post("json.php", {"name" : name}, function(data){
        console.log(data);

        var output1 = $("<p>");
        var output2 = $("<p>");
        var output3 = $("<p>");

        output1.text("ID: " + data.id);
        output2.text("Name: " + data.name);
        output3.text("Email: " + data.email);

        var outputDiv = $("<div>");
        outputDiv.append(output1);
        outputDiv.append(output2);
        outputDiv.append(output3);

        $("body").append(outputDiv);

    });
}

function getXML() {
    $.ajax({
        url: "xml.php", 
        type: "GET",
        success: function(result){
            console.log(result);

        },
        error: function(e) {
            console.log(e);
        }
    });
}