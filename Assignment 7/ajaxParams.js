/*
    AJAX Asignment 7
    Sarah Omernik
*/

function init() {
    
    doAJAXRequest("ajaxParams.php", function(xhr) {

        alert(xhr.responseText);

    })
}

function doAJAXRequest(url, callback) {

    var xhr = new XMLHttpRequest();
    var url = "ajaxParams.php";
    var params = "name=John Doe"; // HTTP Get Parameter (could be input from form)
    
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 &&
            xhr.status == 200) {

                callback(xhr);
      
        }
    }
    
    xhr.send(params);
}