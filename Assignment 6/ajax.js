function init() {
    alert("hello");

    var xhr = new XMLHttpRequest();
    var url = "hello.php";

    xhr.open("GET", url);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            alert(xhr.responseText);
        }
    }

    xhr.send(null);
}