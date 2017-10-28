/*
AJAX Midterm
Sarah Omernik

Question #26
Create a class (Rectangle) that has 2 private variables _length and _width.
Add a function called Perimeter that calculates the perimeter of the current rectangle instance.
The Perimeter function should be included in the prototype of the Rectangle class.
Make sure the Perimeter method does not access the instance variables _length and _width.
The variables should be passed into the Perimeter method (5 points)
*/
    function Rectangle() {

        var _length;
        var _width;

    }

    Rectangle.prototype.Perimeter = function(_length = 0, _width = 0) {
            return (2 * _length) + (2 * _width);
    }

    var shape = new Rectangle();
    alert("Perimeter" + shape.Perimeter(5, 4));

/*
Question #27
Assuming the xml below is loaded in a string variable named _states,
load the string into a xml document (cross browser).
Create a textnode that contains the fulltext of the 2nd state and append it to the document.body (5 points)

<states>
    <state>
        <abbreviation>WI</abbreviation>
        <fulltext>Wisconsin</fulltext>
    </state>
    <state>
        <abbreviation>IL</abbreviation>
        <fulltext>Illinois</fulltext>
    </state>
    <state>
        <abbreviation>MN</abbreviation>
        <fulltext>Minnesota</fulltext>
    </state>
</states>
*/
    var _states = "<states><state><abbreviation>WI</abbreviation><fulltext>Wisconsin</fulltext></state>" +
            "<state><abbreviation>IL</abbreviation><fulltext>Illinois</fulltext></state>" + 
            "<state><abbreviation>MN</abbreviation><fulltext>Minnesota</fulltext></state></states>";

    var xmlParser;
    if(window.DOMParser) {
        //xmlParser will be an instance of DOMParser
        xmlParser = new DOMParser().parseFromString(_states, "application/xml");
    } else {
        //xmlParser will be an instance of an ActiveXObject
        xmlParser = new ActiveXObject("Microsoft.XMLDOM");
        xmlParser.loadXML(_states);
    }

	var stateNodes = xmlParser.getElementsByTagName("state"); //returns an array

    var text = document.createTextNode(stateNodes[1].getElementsByTagName("fulltext")[0].childNodes[0].nodeValue);

    document.body.appendChild(text);


/*
Question #28
Assuming you have a server resource called response.php that sends you a JSON response.
Write code to create an ajax request to that retrieves the JSON response
from response.php and loads the response into a javascript variable called response. (5 points)
*/

    makeAJAXRequest("response.php", function(xhr) {

        var response = xhr.responseText;
        
    })

    function makeAJAXRequest(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 &&
                xhr.status == 200) {
                callback(xhr);				
            }
        }
        
        xhr.send(null);
    }

/*
Question #29
With the below xml, recreate the data by creating a variable that stores
the same data as JSON (you can hard code the JSON data). 
Output the value of the 2nd state's abbreviation and fulltext. 
This does not need to be done through code. You can simply have a 
variable that stores the JSON data. (5 points)

<states>
    <state>
        <abbreviation>WI</abbreviation>
        <fulltext>Wisconsin</fulltext>
    </state>
    <state>
        <abbreviation>IL</abbreviation>
        <fulltext>Illinois</fulltext>
    </state>
    <state>
        <abbreviation>MN</abbreviation>
        <fulltext>Minnesota</fulltext>
    </state>
</states>
*/

    var states = [
        {
            "abbreviation" : "WI", "fulltext": "Wisconsin"
        }, 
        {
            "abbreviation" : "IL", "fulltext": "Illinois"
        }, 
        {
            "abbreviation" : "MN", "fulltext": "Minnesota"
        }
    ];

    alert("Abbr: " + states[2].abbreviation + ", Full Text: " + states[2].fulltext);
/*
Question #30
Why are anonymous functions needed in javascript. Make sure to 
explain the problem and how anonymous function address the problem. (5 points)


    Anonymous functions are declared inline and that allows them to access variables from a parent scope.
    This makes anonymous functions helpful inside classes to access instance/private variables.

    Some other benefits of anonymous functions include scope management and the ability to only use variables in a confined scope.
    Another benefit is keeping code consise when being used in callback and event handlers.

*/